const {readPhysics, readPhysicsAccFiltered} = require("./physicsReader");
const {readGraphics, readGraphicsAccFiltered} = require("./graphicReader");
const {readStatic, readStaticAccFiltered} = require("./staticReader");

const readAll = () => {
    return {
        physics: readPhysics(),
        graphics: readGraphics(),
        static: readStatic()
    }
}

const readAllAccFiltered = () => {
    return {
        physics: readPhysicsAccFiltered(),
        graphics: readGraphicsAccFiltered(),
        static: readStaticAccFiltered()
    }
}
