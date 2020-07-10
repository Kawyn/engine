

const canvas = document.getElementById('screen');
const screen = canvas.getContext('2d');



window.addEventListener('resize', resizeCanvas, false);
let aspectRatio = 1;
let scaleeee = 1;


function drawStuff() {
    // do your drawing stuff here
}




var skybox = '#dadada';




class Triangle {

    constructor(vertices, color) {

        this.vertices = vertices || [, ,];
        this.color = color || '#000000';
    }
}


class Mesh {

    constructor(triangles) {
        this.polygons = tirangles;
    }
}



class Polygon {
    constructor(vertices, color) {

        this.vertices = vertices || [0, 0, 0];
        this.color = color;
    }
    Copy() {
        let n = new Polygon([this.vertices[0].Copy(), this.vertices[1].Copy(), this.vertices[2].Copy()], this.color);
        return n;
    }
}



function Matrix_MakeProjection(fFovDegrees, fAspectRatio, fNear, fFar) {
    const matrix = new Matrix4x4();
    let fFovRad = 1 / Math.tan(fFovDegrees * 0.5 / 180.0 * 3.14159);


    matrix.m[0][0] = fAspectRatio * fFovRad;
    matrix.m[1][1] = fFovRad;
    matrix.m[2][2] = fFar / (fFar - fNear);
    matrix.m[3][2] = (-fFar * fNear) / (fFar - fNear);
    matrix.m[2][3] = 1;
    matrix.m[3][3] = 0;
    return matrix;
}
function Matrix_MultiplyMatrix(m1, m2) {
    const matrix = new Matrix4x4();
    for (let c = 0; c < 4; c++)
        for (let r = 0; r < 4; r++)
            matrix.m[r][c] = m1.m[r][0] * m2.m[0][c] + m1.m[r][1] * m2.m[1][c] + m1.m[r][2] * m2.m[2][c] + m1.m[r][3] * m2.m[3][c];
    return matrix;
}



const cube =
    [
        new Polygon([new Vector3(0, 0, 0), new Vector3(0, 2, 0), new Vector3(1, 2, 0)]),
        new Polygon([new Vector3(0, 0, 0), new Vector3(1, 2, 0), new Vector3(1, 0, 0)]),

        new Polygon([new Vector3(1, 0, 0), new Vector3(1, 2, 0), new Vector3(1, 2, 1)]),
        new Polygon([new Vector3(1, 0, 0), new Vector3(1, 2, 1), new Vector3(1, 0, 1)]),

        new Polygon([new Vector3(1, 0, 1), new Vector3(1, 2, 1), new Vector3(0, 2, 1)]),
        new Polygon([new Vector3(1, 0, 1), new Vector3(0, 2, 1), new Vector3(0, 0, 1)]),

        new Polygon([new Vector3(0, 0, 1), new Vector3(0, 2, 1), new Vector3(0, 2, 0)]),
        new Polygon([new Vector3(0, 0, 1), new Vector3(0, 2, 0), new Vector3(0, 0, 0)]),

        new Polygon([new Vector3(0, 2, 0), new Vector3(0, 2, 1), new Vector3(1, 2, 1)]),
        new Polygon([new Vector3(0, 2, 0), new Vector3(1, 2, 1), new Vector3(1, 2, 0)]),

        new Polygon([new Vector3(1, 0, 1), new Vector3(0, 0, 1), new Vector3(0, 0, 0)]),
        new Polygon([new Vector3(1, 0, 1), new Vector3(0, 0, 0), new Vector3(1, 0, 0)])
    ];


const cubee =
    [
        new Polygon([new Vector3(0, 0, 0), new Vector3(0, 1, 0), new Vector3(1, 1, 0)]),
        new Polygon([new Vector3(0, 0, 0), new Vector3(1, 1, 0), new Vector3(1, 0, 0)]),

        new Polygon([new Vector3(1, 0, 0), new Vector3(1, 1, 0), new Vector3(1, 1, 1)]),
        new Polygon([new Vector3(1, 0, 0), new Vector3(1, 1, 1), new Vector3(1, 0, 1)]),

        new Polygon([new Vector3(1, 0, 1), new Vector3(1, 1, 1), new Vector3(0, 1, 1)]),
        new Polygon([new Vector3(1, 0, 1), new Vector3(0, 1, 1), new Vector3(0, 0, 1)]),

        new Polygon([new Vector3(0, 0, 1), new Vector3(0, 1, 1), new Vector3(0, 1, 0)]),
        new Polygon([new Vector3(0, 0, 1), new Vector3(0, 1, 0), new Vector3(0, 0, 0)]),

        new Polygon([new Vector3(0, 1, 0), new Vector3(0, 1, 1), new Vector3(1, 1, 1)]),
        new Polygon([new Vector3(0, 1, 0), new Vector3(1, 1, 1), new Vector3(1, 1, 0)]),

        new Polygon([new Vector3(1, 0, 1), new Vector3(0, 0, 1), new Vector3(0, 0, 0)]),
        new Polygon([new Vector3(1, 0, 1), new Vector3(0, 0, 0), new Vector3(1, 0, 0)])
    ];


const planes = { near: 0.1, far: 1000 };
const fov = 90;
const fovRad = 1 / Math.tan(fov * 0.5 / 180 * 3.14159);

var matrix = new Matrix4x4();
matrix.m[0][0] = aspectRatio * fovRad;
matrix.m[1][1] = fovRad;
matrix.m[2][2] = planes.far / (planes.far - planes.near);
matrix.m[3][2] = (-planes.far * planes.near) / (planes.far - planes.near);
matrix.m[2][3] = 1;
matrix.m[3][3] = 0;



const map = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 1, 0, 1, 0, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 1, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 0, 1, 0, 1, 1, 0, 1],
    [1, 0, 0, 1, 0, 0, 1, 0, 1],
    [1, 1, 1, 1, 1, 0, 1, 1, 1]
]




// Labirynt

const Scene = {
    GameObjects: [
    ]
};








const light = new Vector3(0, 1, -1);
var time = 0;
const camera = {
    position: new Vector3(1.5, 1, -3),
    rotation: new Vector3(0, 0, 0)
};


let matProj = Matrix_MakeProjection(fov, aspectRatio, 0.1, 1000);

let Yaw = 0;
document.addEventListener("keydown", (event) => {


    if (event.key == "w") {
        movement.position.x = 1;
    }
    if (event.key == "s") {
        movement.position.x = -1;
    }
    if (event.key == "d") {
        movement.rotation.y = 0.01;
    }
    if (event.key == "a") {
        movement.rotation.y = - 0.01;
    }

    if (event.keyCode == 40) {
        movement.rotation.z = -0.01;
    }
    if (event.keyCode == 38) {
        movement.rotation.z = 0.01;
    }

    if (event.key == ' ') {
        camera.position.y += 0.1;
    }
    if (event.key == 'Control') {
        camera.position.y -= 0.1;
    }
});
document.addEventListener("keyup", (event) => {
    if (event.key == "w") {
        if (movement.position.x == 1)
            movement.position.x = 0;
    }
    if (event.key == "s") {
        if (movement.position.x == -1)
            movement.position.x = 0;
    }
    if (event.key == "d") {
        if (movement.rotation.y == 0.01)
            movement.rotation.y = 0;
    }
    if (event.key == "a") {
        if (movement.rotation.y == -0.01)
            movement.rotation.y = 0;
    }


    if (event.keyCode == 40) {
        movement.rotation.z = 0;
    }
    if (event.keyCode == 38) {
        movement.rotation.z = 0;
    }
})
let rotate = false;
const movement = {
    position: new Vector3(),
    rotation: new Vector3(),
}
let lgt = true;
let clr = '#fa432b'
const player = {
    rotationSpeed: 2.25,
    movementSpeed: 0.05,
}
let Xaw = 0;
let acda = setInterval(() => {

    const vForward = Vectors.Scale(camera.rotation, movement.position.x * player.movementSpeed);
    let oldcam = camera.position.Copy();
    camera.position = Vectors.Sum(camera.position, vForward);
    Scene.GameObjects.forEach(gameObject => {
        if (Vectors.isBetween(camera.position, gameObject.transform.position, Vectors.Sum(gameObject.transform.position, gameObject.collider))) {
            camera.position = oldcam;
            console.log('a');
            return;
        }
    });

    Yaw += movement.rotation.y * player.rotationSpeed;
    /* if (Xaw + movement.rotation.z < 1.5 && Xaw + movement.rotation.z > -1.5)
         Xaw += movement.rotation.z * player.rotationSpeed;
     */

    if (rotate)
        time += 0.02;
    let matRotZ = new Matrix4x4();
    let matRotX = new Matrix4x4();

    matRotZ.RotateZ(time * 0.5);
    matRotX.RotateX(time);




    const up = new Vector3(0, 1, 0);
    let target = new Vector3(0, 0, 1);

    let matCameraRot = new Matrix4x4();
    matCameraRot.RotateY(Yaw);


    let matX = new Matrix4x4();
    matX.RotateX(Xaw);
    matCameraRot = Matrixes.MultiplyMatrix(matX, matCameraRot);

    camera.rotation = Matrixes.MultiplyVector(matCameraRot, target);
    target = Vectors.Sum(camera.position, camera.rotation);


    let matCamera = Matrixes.PointAt(camera.position, target, up);
    const matView = matCamera.Copy();
    matView.Inverse();


    let triangles = [];
    Scene.GameObjects.forEach(GameObject => {

        let matTrans = new Matrix4x4();
        matTrans.Translate(GameObject.transform.position.x, GameObject.transform.position.y, GameObject.transform.position.z);


        let matWorld = new Matrix4x4();
        matWorld.CreateIdentity();
        matWorld = Matrix_MultiplyMatrix(matRotX, matRotZ);
        matWorld = Matrix_MultiplyMatrix(matWorld, matTrans);

        GameObject.mesh.forEach(triangle => {

            let transformed = new Polygon();
            let viewed = new Polygon();

            transformed.vertices[0] = Matrixes.MultiplyVector(matWorld, triangle.vertices[0]);
            transformed.vertices[1] = Matrixes.MultiplyVector(matWorld, triangle.vertices[1]);
            transformed.vertices[2] = Matrixes.MultiplyVector(matWorld, triangle.vertices[2]);


            const line1 = Vectors.Sub(transformed.vertices[1], transformed.vertices[0]);
            const line2 = Vectors.Sub(transformed.vertices[2], transformed.vertices[0]);
            let normal = Vectors.Cross(line1, line2);
            normal.Normalize();


            let ray = Vectors.Sub(transformed.vertices[0], camera.position);


            if (Vectors.Dot(normal, ray) < 0) {

                if (lgt == true) {
                    let nlight = new Vector3(-1, 2, -2);
                    nlight.Normalize();

                    const dp = Math.max(0.01, Vectors.Dot(nlight, normal));


                    let brightness = Math.round(dp * 255);
                    brightness = brightness.toString(16);
                    viewed.color = '#' + brightness + brightness + brightness;
                }
                else
                    viewed.color = clr;
                viewed.vertices[0] = Matrixes.MultiplyVector(matView, transformed.vertices[0]);
                viewed.vertices[1] = Matrixes.MultiplyVector(matView, transformed.vertices[1]);
                viewed.vertices[2] = Matrixes.MultiplyVector(matView, transformed.vertices[2]);



                let nClippedTriangles = Triangle_ClipAgainstPlane(new Vector3(0, 0, 0.1), new Vector3(0, 0, 1), viewed.Copy());

                // We may end up with multiple triangles form the clip, so project as
                // required
                for (let n = 0; n < nClippedTriangles.i; n++) {
                    let projected = new Polygon();
                    projected.vertices[0] = Matrixes.MultiplyVector(matProj, nClippedTriangles.out_tri[n].vertices[0]);
                    projected.vertices[1] = Matrixes.MultiplyVector(matProj, nClippedTriangles.out_tri[n].vertices[1]);
                    projected.vertices[2] = Matrixes.MultiplyVector(matProj, nClippedTriangles.out_tri[n].vertices[2]);

                    projected.color = nClippedTriangles.out_tri[n].color;

                    projected.vertices[0] = Vectors.Scale(projected.vertices[0], 1 / projected.vertices[0].w);
                    projected.vertices[1] = Vectors.Scale(projected.vertices[1], 1 / projected.vertices[1].w);
                    projected.vertices[2] = Vectors.Scale(projected.vertices[2], 1 / projected.vertices[2].w);

                    projected.vertices[0].x *= -1;
                    projected.vertices[0].y *= -1;
                    projected.vertices[1].x *= -1;
                    projected.vertices[1].y *= -1;
                    projected.vertices[2].x *= -1;
                    projected.vertices[2].y *= -1;

                    let viewOffset = new Vector3(1, 1, 0);

                    projected.vertices[0] = Vectors.Sum(projected.vertices[0], viewOffset);
                    projected.vertices[1] = Vectors.Sum(projected.vertices[1], viewOffset);
                    projected.vertices[2] = Vectors.Sum(projected.vertices[2], viewOffset);

                    projected.vertices[0].x *= 0.5 * canvas.width;
                    projected.vertices[0].y *= 0.5 * canvas.height;
                    projected.vertices[1].x *= 0.5 * canvas.width;
                    projected.vertices[1].y *= 0.5 * canvas.height;
                    projected.vertices[2].x *= 0.5 * canvas.width;
                    projected.vertices[2].y *= 0.5 * canvas.height;
                    triangles.push(projected);
                }
            }
        });
    });


    triangles.sort((a, b) => {
        let z1 = (a.vertices[0].z + a.vertices[1].z + a.vertices[2].z) / 3;
        let z2 = (b.vertices[0].z + b.vertices[1].z + b.vertices[2].z) / 3;
        return z2 - z1;
    });

    Draw.Clear();


    // Loop through all transformed, viewed, projected, and sorted triangles
    triangles.forEach(triangle => {

        let clipped = [new Polygon(), new Polygon];
        let listTriangles = [];

        // Add initial triangle
        listTriangles.push(triangle);
        let nNewTriangles = 1;

        for (let p = 0; p < 4; p++) {
            let nTrisToAdd = 0;
            while (nNewTriangles > 0) {
                // Take triangle from front of queue
                let test = listTriangles.shift();
                nNewTriangles--;

                // Clip it against a plane. We only need to test each 
                // subsequent plane, against subsequent new triangles
                // as all triangles after a plane clip are guaranteed
                // to lie on the inside of the plane. I like how this
                // comment is almost completely and utterly justified
                let aqq;
                switch (p) {
                    case 0: aqq = Triangle_ClipAgainstPlane(new Vector3(), new Vector3(0, 1, 0), test, clipped[0], clipped[1]); nTrisToAdd = aqq.i; clipped = aqq.out_tri; break;
                    case 1: aqq = Triangle_ClipAgainstPlane(new Vector3(0, canvas.height - 1, 0), new Vector3(0, - 1, 0), test, clipped[0], clipped[1]); nTrisToAdd = aqq.i; clipped = aqq.out_tri; break;
                    case 2: aqq = Triangle_ClipAgainstPlane(new Vector3(), new Vector3(1, 0, 0), test, clipped[0], clipped[1]); nTrisToAdd = aqq.i; clipped = aqq.out_tri; break;
                    case 3: aqq = Triangle_ClipAgainstPlane(new Vector3(canvas.width - 1, 0, 0), new Vector3(- 1, 0, 0), test, clipped[0], clipped[1]); nTrisToAdd = aqq.i; clipped = aqq.out_tri; break;
                }

                // Clipping may yield a variable number of triangles, so
                // add these new ones to the back of the queue for subsequent
                // clipping against next planes
                for (let w = 0; w < nTrisToAdd; w++)
                    listTriangles.push(clipped[w]);
            }
            nNewTriangles = listTriangles.length;
        }
        listTriangles.forEach(t => {
            Draw.Polygon(t.vertices[0].x, t.vertices[0].y, t.vertices[1].x, t.vertices[1].y, t.vertices[2].x, t.vertices[2].y, t.color)
        });
    });

}, 16.667 /* 60 FPS */);




function Triangle_ClipAgainstPlane(plane_p, plane_n, in_tri) {
    let out_tri1 = new Polygon();
    let out_tri2 = new Polygon();
    let output = {
        i: 0,
        out_tri: [],
    }

    plane_n.Normalize();
    // Return signed shortest distance from point to plane, plane normal must be normalised
    function dist(p) {
        return (plane_n.x * p.x + plane_n.y * p.y + plane_n.z * p.z) - Vectors.Dot(plane_n, plane_p);
    }
    // Create two temporary storage arrays to classify points either side of plane
    // If distance sign is positive, point lies on "inside" of plane
    let inside_points = [, ,]; let nInsidePointCount = 0;
    let outside_points = [, ,]; let nOutsidePointCount = 0;
    // Get signed distance of each point in triangle to plane
    let d0 = dist(in_tri.vertices[0]);
    let d1 = dist(in_tri.vertices[1]);
    let d2 = dist(in_tri.vertices[2]);

    if (d0 >= 0) {
        inside_points[nInsidePointCount++] = in_tri.vertices[0].Copy();
    }
    else { outside_points[nOutsidePointCount++] = in_tri.vertices[0].Copy(); }
    if (d1 >= 0) { inside_points[nInsidePointCount++] = in_tri.vertices[1].Copy(); }
    else { outside_points[nOutsidePointCount++] = in_tri.vertices[1].Copy(); }
    if (d2 >= 0) { inside_points[nInsidePointCount++] = in_tri.vertices[2].Copy(); }
    else { outside_points[nOutsidePointCount++] = in_tri.vertices[2].Copy(); }
    // Now classify triangle points, and break the input triangle into 
    // smaller output triangles if required. There are four possible
    // outcomes...
    if (nInsidePointCount == 0) {
        // All points lie on the outside of plane, so clip whole triangle
        // It ceases to exist
        output.i = 0;
        return output; // No returned triangles are valid
    }

    if (nInsidePointCount == 3) {
        // All points lie on the inside of plane, so do nothing
        // and allow the triangle to simply pass through

        output.i = 1;
        output.out_tri = [in_tri.Copy()];
        return output; // Just the one returned original triangle is valid
    }

    if (nInsidePointCount == 1 && nOutsidePointCount == 2) {

        // Triangle should be clipped. As two points lie outside
        // the plane, the triangle simply becomes a smaller triangle

        // Copy appearance info to new triangle
        // out_tri1.color = in_tri.color;
        out_tri1.color = in_tri.color;
        // The inside point is valid, so keep that...
        out_tri1.vertices[0] = inside_points[0].Copy();
        // but the two new points are at the locations where the 
        // original sides of the triangle (lines) intersect with the plane
        out_tri1.vertices[1] = Vectors.IntersectPlane(plane_p, plane_n.Copy(), inside_points[0], outside_points[0]);
        out_tri1.vertices[2] = Vectors.IntersectPlane(plane_p, plane_n.Copy(), inside_points[0], outside_points[1]);

        output.i = 1;
        output.out_tri = [out_tri1.Copy()];
        return output; // Return the newly formed single triangle
    }

    if (nInsidePointCount == 2 && nOutsidePointCount == 1) {
        // Triangle should be clipped. As two points lie inside the plane,
        // the clipped triangle becomes a "quad". Fortunately, we can
        // represent a quad with two new triangles

        // Copy appearance info to new triangles
        // out_tri1.col = in_tri.col;

        // out_tri2.col = in_tri.col;
        out_tri1.color = in_tri.color;
        out_tri2.color = in_tri.color;
        // The first triangle consists of the two inside points and a new
        // point determined by the location where one side of the triangle
        // intersects with the plane
        out_tri1.vertices[0] = inside_points[0].Copy();
        out_tri1.vertices[1] = inside_points[1].Copy();
        out_tri1.vertices[2] = Vectors.IntersectPlane(plane_p, plane_n.Copy(), inside_points[0], outside_points[0]);
        // The second triangle is composed of one of he inside points, a
        // new point determined by the intersection of the other side of the 
        // triangle and the plane, and the newly created point above

        out_tri2.vertices[0] = inside_points[1].Copy();
        out_tri2.vertices[1] = out_tri1.vertices[2].Copy();
        out_tri2.vertices[2] = Vectors.IntersectPlane(plane_p, plane_n.Copy(), inside_points[1], outside_points[0]);
        output.i = 2;
        output.out_tri = [out_tri1.Copy(), out_tri2.Copy()];
        return output;
    }
}

function resizeCanvas() {
    canvas.width = window.innerWidth / scaleeee;
    canvas.height = window.innerHeight / scaleeee;

    canvas.style.height = window.innerHeight + 'px';
    canvas.style.width = window.innerWidth + 'px';
    aspectRatio = window.innerHeight / window.innerWidth;

    matrix.m[0][0] = aspectRatio * fovRad;
    matProj = Matrix_MakeProjection(fov, aspectRatio, 0.1, 1000);
}
resizeCanvas();




