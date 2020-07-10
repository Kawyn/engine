let jumpForce = 10;


let jump;

document.addEventListener('keydown', (event) => {

    switch (event.keyCode) {

        case 65: // A
            movement.rotation.y = - 0.01;
            break;

        case 68: // D
            movement.rotation.y = 0.01;
            break;

        case 83: // S
            movement.position.x = -1;
            break;

        case 87: // W
            movement.position.x = 1;
            break;


        case 32: // Space

            if (grounded)
                fallForce += 0.2;

            break;
    }
});
document.addEventListener('keyup', (event) => {

    switch (event.keyCode) {

        case 65: // A

            if (movement.rotation.y == -0.01)
                movement.rotation.y = 0;

            break;

        case 68: // D

            if (movement.rotation.y == 0.01)
                movement.rotation.y = 0;

            break;

        case 83: // S

            if (movement.position.x == -1)
                movement.position.x = 0;

            break;

        case 87: // W

            if (movement.position.x == 1)
                movement.position.x = 0;

            break;
    }
});