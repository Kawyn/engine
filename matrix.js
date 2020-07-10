/**
 * @summary A standard 4x4 transformation matrix.
 */
class Matrix4x4 {

    constructor() {

        this.m = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ]
    }


    CreateIdentity() {

        this.m[0][0] = 1;
        this.m[1][1] = 1;
        this.m[2][2] = 1;
        this.m[3][3] = 1;
    }

    RotateX(angle) {

        this.m[0][0] = 1;
        this.m[1][1] = Math.cos(angle);
        this.m[1][2] = Math.sin(angle);
        this.m[2][1] = -Math.sin(angle);
        this.m[2][2] = Math.cos(angle);
        this.m[3][3] = 1;
    }
    RotateY(angle) {

        this.m[0][0] = Math.cos(angle);
        this.m[0][2] = Math.sin(angle);
        this.m[2][0] = -Math.sin(angle);
        this.m[1][1] = 1;
        this.m[2][2] = Math.cos(angle);
        this.m[3][3] = 1;
    }
    RotateZ(angle) {

        this.m[0][0] = Math.cos(angle);
        this.m[0][1] = Math.sin(angle);
        this.m[1][0] = -Math.sin(angle);
        this.m[1][1] = Math.cos(angle);
        this.m[2][2] = 1;
        this.m[3][3] = 1;
    }

    Translate(x, y, z) {

        this.CreateIdentity();
        this.m[3][0] = x;
        this.m[3][1] = y;
        this.m[3][2] = z;
    }

    Inverse() {
        const matrix = new Matrix4x4();
        matrix.m[0][0] = this.m[0][0]; matrix.m[0][1] = this.m[1][0]; matrix.m[0][2] = this.m[2][0]; matrix.m[0][3] = 0;
        matrix.m[1][0] = this.m[0][1]; matrix.m[1][1] = this.m[1][1]; matrix.m[1][2] = this.m[2][1]; matrix.m[1][3] = 0;
        matrix.m[2][0] = this.m[0][2]; matrix.m[2][1] = this.m[1][2]; matrix.m[2][2] = this.m[2][2]; matrix.m[2][3] = 0;
        matrix.m[3][0] = -(this.m[3][0] * matrix.m[0][0] + this.m[3][1] * matrix.m[1][0] + this.m[3][2] * matrix.m[2][0]);
        matrix.m[3][1] = -(this.m[3][0] * matrix.m[0][1] + this.m[3][1] * matrix.m[1][1] + this.m[3][2] * matrix.m[2][1]);
        matrix.m[3][2] = -(this.m[3][0] * matrix.m[0][2] + this.m[3][1] * matrix.m[1][2] + this.m[3][2] * matrix.m[2][2]);
        matrix.m[3][3] = 1;
        this.m = matrix.m;
    }
    Copy() {

        const matrix = new Matrix4x4();

        for (let c = 0; c < 4; c++)
            for (let r = 0; r < 4; r++)
                matrix.m[r][c] = this.m[r][c];

        return matrix;

    }
}

const Matrixes = {

    MultiplyVector(m, v) {

        const x = v.x * m.m[0][0] + v.y * m.m[1][0] + v.z * m.m[2][0] + v.w * m.m[3][0];
        const y = v.x * m.m[0][1] + v.y * m.m[1][1] + v.z * m.m[2][1] + v.w * m.m[3][1];
        const z = v.x * m.m[0][2] + v.y * m.m[1][2] + v.z * m.m[2][2] + v.w * m.m[3][2];
        const w = v.x * m.m[0][3] + v.y * m.m[1][3] + v.z * m.m[2][3] + v.w * m.m[3][3];

        return new Vector3(x, y, z, w);
    },

    MakeProjection(fFovDegrees, fAspectRatio, fNear, fFar) {
        fFovRad = 1 / Math.tan(fFovDegrees * 0 / 180 * 3.14159);
        let matrix = new Matrix4x4();
        matrix.m[0][0] = fAspectRatio * fFovRad;
        matrix.m[1][1] = fFovRad;
        matrix.m[2][2] = fFar / (fFar - fNear);
        matrix.m[3][2] = (-fFar * fNear) / (fFar - fNear);
        matrix.m[2][3] = 1;
        matrix.m[3][3] = 0;
        return matrix;
    },

    MultiplyMatrix(m1, m2) {
        let matrix = new Matrix4x4();
        for (let c = 0; c < 4; c++)
            for (let r = 0; r < 4; r++)
                matrix.m[r][c] = m1.m[r][0] * m2.m[0][c] + m1.m[r][1] * m2.m[1][c] + m1.m[r][2] * m2.m[2][c] + m1.m[r][3] * m2.m[3][c];
        return matrix;
    },



    PointAt(pos, target, up) {

        // Calculate new forward direction
        let newForward = Vectors.Sub(target, pos);
        newForward.Normalize();
        // Calculate new Up direction
        let a = Vectors.Scale(newForward, Vectors.Dot(up, newForward));
        let newUp = Vectors.Sub(up, a);
        newUp.Normalize();

        // New Right direction is easy, its just cross product
        let newRight = Vectors.Cross(newUp, newForward);

        // Construct Dimensioning and Translation Matrix	
        let matrix = new Matrix4x4();
        matrix.m[0][0] = newRight.x; matrix.m[0][1] = newRight.y; matrix.m[0][2] = newRight.z; matrix.m[0][3] = 0;
        matrix.m[1][0] = newUp.x; matrix.m[1][1] = newUp.y; matrix.m[1][2] = newUp.z; matrix.m[1][3] = 0;
        matrix.m[2][0] = newForward.x; matrix.m[2][1] = newForward.y; matrix.m[2][2] = newForward.z; matrix.m[2][3] = 0;
        matrix.m[3][0] = pos.x; matrix.m[3][1] = pos.y; matrix.m[3][2] = pos.z; matrix.m[3][3] = 1;
        return matrix;
    }
}