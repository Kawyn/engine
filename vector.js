/**
 * @summary Representation of 3D vectors and points.
 */
class Vector3 {

    constructor(x, y, z, w = 1) {

        this.x = parseFloat(x) || 0;
        this.y = parseFloat(y) || 0;
        this.z = parseFloat(z) || 0;
        this.w = w;
    }

    /**
     * @summary returns a new identical vector.
     */
    Copy() {

        return new Vector3(this.x, this.y, this.z, this.w);
    }

    /**
     * @summary Makes this vector have a magnitude of 1.
     * When normalized, a vector keeps the same direction but its length is 1.0.
     * Note that this function will change the current vector.
     */
    Normalize() {

        const length = this.Length()

        if (length == 0)
            return;

        this.x /= length;
        this.y /= length;
        this.z /= length;
        this.w = 1;
    }

    /**
     * @summary Returns the length of this vector. 
     * The length of the vector is square root of (x * x + y * y + z * z).
     */
    Length() {

        return Math.sqrt(Vectors.Dot(this, this));
    }
}

/**
  * @summary An intrinsic object that provides basic vectos functions.
  */
const Vectors = {

    /**
     * @summary Adds two vectors.
     */
    Sum(v1, v2) {

        return new Vector3(v1.x + v2.x, v1.y + v2.y, v1.z + v2.z);
    },

    /**
     * @summary Subtracts one vector from another.
     */
    Sub(v1, v2) {

        return new Vector3(v1.x - v2.x, v1.y - v2.y, v1.z - v2.z);
    },

    /**
     * @summary Multiplies vector by factor.
     * Every component in the result is a component of vector multiplied factor.
     */
    Scale(v1, factor) {

        return new Vector3(v1.x * factor, v1.y * factor, v1.z * factor);
    },

    /**
     * @summary Cross Product of two vectors. The cross product of two vectors results in a third vector which is perpendicular to the two input vectors. The result's magnitude is equal to the magnitudes of the two inputs multiplied together and then multiplied by the sine of the angle between the inputs. You can determine the direction of the result vector using the "left hand rule".
     */
    Cross(v1, v2) {

        const x = v1.y * v2.z - v1.z * v2.y;
        const y = v1.z * v2.x - v1.x * v2.z;
        const z = v1.x * v2.y - v1.y * v2.x;

        return new Vector3(x, y, z);
    },

    /**
     * @summary Dot Product of two vectors. The dot product is a float value equal to the magnitudes of the two vectors multiplied together and then multiplied by the cosine of the angle between them.
     */
    Dot(v1, v2) {

        return v1.x * v2.x + v1.y * v2.y + v1.z * v2.z;
    },

    IntersectPlane(plane_p, plane_n, lineStart, lineEnd) {

        plane_n.Normalize();
        let plane_d = -Vectors.Dot(plane_n, plane_p);
        const ad = Vectors.Dot(lineStart, plane_n);
        const bd = Vectors.Dot(lineEnd, plane_n);
        let t = (-plane_d - ad) / (bd - ad);
        let lineStartToEnd = Vectors.Sub(lineEnd, lineStart);
        let lineToIntersect = Vectors.Scale(lineStartToEnd, t);
        return Vectors.Sum(lineStart, lineToIntersect);
    },

    isBetween(point, v1, v2) {

        if (point.x >= v1.x - 0.25 && point.x <= v2.x + 0.25)
            if (point.y >= v1.y - 0.25 && point.y <= v2.y + 0.25)
                if (point.z >= v1.z - 0.25 && point.z <= v2.z + 0.25)
                    return true;

        return false;
    }
}
