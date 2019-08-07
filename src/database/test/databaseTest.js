const test = require("tape");
const runDbBuild = require("../db_build");
const getData = require("../queries/getAll");

test("testing tape", t => {
    t.equal(1, 1, "one equals one");
    t.end();
});

test("Testing getData", t => {
    let expected = [{ id: 1, name: 'Sunflower', img: 'https://cdn.sabq.org/uploads/media-cache/resize_800_relative/uploads/material-file/57af2905815736b09540190f/57af2900a9691.jpg' }, { id: 2, name: 'Madonna Lily', img: 'https://ae01.alicdn.com/kf/HTB1RX8sIFXXXXb6XXXXq6xXFXXXJ/-.jpg' }, { id: 3, name: 'Anemone coronaria', img: 'https://image.shutterstock.com/image-photo/sunny-poopy-field-surrounded-hills-260nw-536762971.jpg' }, { id: 4, name: 'daisy', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5lMKH5V2w0L19heLxIJ5UKg80V2ngyOc0hlqhzzAREh40p10W' }];

    runDbBuild((error, res) => {
        t.error(error, "No error");

        getData((err, result) => {
            if (err) {
                return err;
            }
            t.deepEqual(result, expected, "It should be an array with 4 objects");
            t.end();
        });
    });
});