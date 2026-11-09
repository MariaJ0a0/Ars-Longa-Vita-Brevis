// ==========================================
// INTERACTIVE ART GALLERY
// Illustrator artboard: 1920 x 8077.9196 px
// ==========================================

const ARTBOARD_WIDTH = 1920;
const ARTBOARD_HEIGHT = 8077.9196;

const artworkLayer = document.getElementById("artwork-layer");
const buttonLayer = document.getElementById("button-layer");
const informationLayer = document.getElementById("information-layer");
const gallery = document.getElementById("gallery");
const container = document.getElementById("gallery-container");


// ==========================================
// ILLUSTRATOR TO CSS COORDINATE CONVERSION
// Illustrator reference point: CENTER
// CSS reference point: TOP LEFT
// ==========================================

function positionFromCenter(element, x, y, width, height) {

    element.style.left = `${x - width / 2}px`;
    element.style.top = `${y - height / 2}px`;

    element.style.width = `${width}px`;
    element.style.height = `${height}px`;
}


// ==========================================
// 1. BUTTON POSITIONS
// Format: [X, Y, Width, Height]
// ==========================================

const buttons = [
[566.9614,3116.5893,264.6903,233.7605],
[1335.7989,3116.5893,293.8139,238.0324],
[560.8477,3940.5077,158.6552,133.0453],
[1381.375,3940.5077,158.6552,133.0453],
[550.69,4249.5918,82.6087,82.6087],
[418.1872,4369.0868,195.4213,82.6087],
[613.5429,4608.6214,258.6551,238.4842],
[359.3996,4730.7605,81.3889,81.3889],
[1567.7112,4730.7605,81.3889,81.3889],
[714.7108,5027.9907,246.1083,124.1141],
[1239.8375,5027.9907,251.5447,126.4245],
[364.6684,5087.3576,82.6087,82.6087],
[1437.0226,5087.3576,89.7155,80.4255],
[590.9915,5268.3494,255.2342,126.9193],
[1320.7991,5268.3494,238.3337,127.0198],
[330.8276,5323.3943,81.3889,81.3889],
[1489.2317,5323.3943,89.7155,80.4255],
[1609.4758,5323.3943,81.3889,81.3889],
[522.106,5444.9881,82.6087,82.6087],
[1397.2535,5444.9881,89.7155,80.4255],
[1613.4311,5444.9881,89.7155,80.4255],
[574.7027,5570.6389,81.3889,81.3889],
[1353.4113,5570.6389,81.3889,81.3889],
[1505.8254,5570.6389,89.7155,80.4255],
[340.248,5690.0844,81.3889,81.3889],
[496.0161,5690.0844,82.6087,82.6087],
[604.1772,5690.0844,82.6087,82.6087],
[1575.241,5690.0844,81.3889,81.3889],
[274.2317,6052.2295,82.6087,82.6087],
[364.4185,6052.2295,82.6087,82.6087],
[456.1265,6052.2295,81.3889,81.3889],
[548.0437,6052.2295,82.6087,82.6087],
[638.7838,6052.2295,81.3889,81.3889],
[1303.2389,6052.2295,81.3889,81.3889],
[1408.8068,6052.2295,89.7155,80.4255],
[1517.0406,6052.2295,81.3889,81.3889],
[362.3157,6165.9416,81.3889,81.3889],
[1558.3303,6165.9416,81.3889,81.3889],
[485.7474,6284.5879,81.3889,81.3889],
[1438.5868,6284.5879,81.3889,81.3889],
[590.4872,6405.8946,81.3889,81.3889],
[1326.4099,6405.8946,81.3889,81.3889],
[418.4019,6646.8421,81.3889,81.3889],
[1501.0766,6646.8421,81.3889,81.3889],
[1568.5609,6768.8835,89.7155,80.4255],
[1384.311,6890.4432,89.7155,80.4255],
[619.9617,7004.5687,81.3889,81.3889],
[1285.7155,7004.5687,81.3889,81.3889],
[1485.8077,7004.5687,89.7155,80.4255]
];

// ==========================================
// 2. ARTWORK POSITIONS AND ASSOCIATIONS
//
// Format:
// [filename, X, Y, Width, Height, Rotation, [button IDs]]
// ==========================================

const artworks = [
["Vitimas-da-Miseria",959.1054,3912.6631,255.8289,199.3367,0,[3,4]],
["Negro",883.9696,4208.2874,162,348,0,[7]],
["Jesus-abencoando-as-criancas",1089.6696,4129.1095,256.1907,212.1717,0,[3,4]],
["Desenho-de-Figura-do-Natural",896.9174,4516.5091,190.4811,253.6628,0,[7]],
["mercurio-adormecido-e-argus",1066.2196,4362.593,174.3833,236.8427,0,[6]],
["Le-tireur-depines",854.2168,4812.0829,199.2671,250.7573,0,[7]],
["Pescador",975.0946,4750.7805,182.25,393,0,[7]],
["Busto-de-Firmino",1122.7941,4597.2946,295.3991,347.0486,0,[6]],
["Cabeca-de-Negro",903.4103,5132.276,253.2926,396.458,0,[12]],
["Academia-Sentada",1030.0566,4914.529,158.9368,309.955,0,[7]],
["carro-de-Apolo",1178.5804,4740.7469,202.5585,201.1013,0,[8,9]],
["Aquiles-entregando-briseis",1147.9055,4892.7631,154.0788,116.2349,0,[7]],
["Estatua-do-Conde-Ferreira",822.0212,5489.3463,201.0888,515.0334,0,[19,21]],
["O-Desterrado",989.3521,5538.5124,364.3298,989.1977,0,[32,35]],
["Saudade",1122.7839,5302.4044,178.0699,437.4865,352.323,[16,18]],
["Cristo-Morto",1092.1916,5423.4517,410.0627,128.7697,0,[13]],
["riqueza-musica-historia-trabalho",989.3521,5619.5127,645.75,424.5,0,[22,23]],
["Busto-Francisco-Pinto-Bessa",802.7408,5841.6472,275.7765,357.2066,0,[25,28]],
["Busto-de-Domingos-de-Almeida",967.1287,5704.0864,240.6331,359.1267,0,[26]],
["miss-leech",1165.7691,5726.0038,213.4874,271.3069,0,[24]],
["Nossa-Senhora-da-Vitoria",935.0561,6150.7853,314.2709,914.2426,0,[17,49]],
["marques-oliveira",839.7426,6035.2095,277.2669,444.5695,0,[31,36]],
["Artista-na-Infancia",1143.7878,6054.7256,270.9074,415.5199,0,[20,27]],
["Morte-de-Adonis",808.6328,6294.6777,266.8343,192.0527,0,[29]],
["Filha-dos-condes-de-Almedina",905.5456,6364.1339,154.0073,465.6034,0,[37,38]],
["flor-agreste",1013.8866,6167.5053,207,403.5,0,[30]],
["Busto-de-Joaquim-Pinto-Leite",1113.1898,6369.2553,284.2116,353.9034,0,[33,34]],
["Narciso",1204.1075,6314.7805,284.3328,575.5432,348.926,[29]],
["Estatua-Felix-de-Avelar-Brotero",839.7777,6632.6094,321.9544,509.3418,0,[43,44]],
["Busto-da-Viscondessa-de-Moser",1013.8866,6509.6682,237.9491,391.1493,0,[39,40]],
["Busto-de-Correia-de-Barros",1210.3302,6502.0367,249.0003,351.2469,0,[41,42]],
["Estatua_de_Dom_Afonso_Henriques",941.0189,6726.6115,347.9813,560.1376,0,[45]],
["busto-da-actriz-emilia-neves",1107.5945,6653.6394,270.75,394.5,0,[46]],
["Busto-de-Fontes-Pereira-de-Melo",1068.6843,6912.5877,276.1278,393.6076,0,[47,48]]
];

// ==========================================
// 3. INFORMATION IMAGE POSITIONS
//
// Format:
// [button ID, X, Y, Width, Height]
// Image filenames: info-01.png to info-49.png
// ==========================================

const information = [
[1,759.9185,3336.3854,398.8203,205.8318],
[2,1158.7017,3336.7976,401.3718,205.0075],
[3,258.9874,3933.6526,401.3718,266.2292],
[4,1680.1184,3933.6526,401.3718,266.2292],
[5,831.191,4252.8669,410.9131,229.0823],
[6,517.5236,4190.9061,398.8203,236.8771],
[7,440.6255,4289.6162,384.617,363.809],
[8,630.9639,4740.8547,401.3718,188.8626],
[9,1491.1242,4875.4444,401.3718,188.8626],
[10,504.4099,4807.6405,401.3718,282.5236],
[11,1489.2317,4804.1391,401.3718,282.5236],
[12,534.0082,4937.4616,398.2171,175.5436],
[13,1472.0336,5249.4314,401.3718,209.9726],
[14,449.003,5475.0528,401.3718,261.2286],
[15,1501.232,5475.0528,401.3718,261.2286],
[16,506.1738,5191.4993,401.3718,174.9047],
[18,1420.6898,5191.4993,401.3718,174.9047],
[17,1505.0026,5517.6129,401.3718,271.7112],
[19,423.9925,5281.7683,408.5808,217.9828],
[20,1500.8187,5632.4473,401.3718,274.9111],
[21,1460.4589,5277.6751,418.8438,204.2294],
[22,421.0006,5714.9264,401.3718,184.0347],
[23,1494.6412,5714.9264,401.3718,184.0347],
[24,1496.3732,5737.3226,417.7519,213.7244],
[25,418.0006,5854.2022,401.3718,213.5736],
[28,1494.6412,5854.2022,401.3718,213.5736],
[26,427.2228,5872.9194,408.5808,243.008],
[27,426.652,5854.3604,408.5808,188.9496],
[29,423.652,6207.3614,408.5808,190.1025],
[30,423.652,6249.7284,408.5808,274.8365],
[31,423.652,6239.3008,408.5808,253.9813],
[36,1480.351,6239.3008,408.5808,253.9813],
[32,423.652,6203.0525,408.5808,181.4847],
[33,417.1002,6222.0516,395.4772,219.483],
[34,1473.7992,6222.0516,395.4772,219.483],
[35,1476.7465,6259.0416,401.3718,293.4629],
[37,418.4019,6335.2532,401.3718,222.5791],
[38,1491.6948,6335.2532,401.3718,222.5791],
[39,427.8073,6463.2133,413.4279,222.1063],
[40,1486.6948,6463.2133,413.4279,222.1063],
[41,420.0318,6575.485,401.3718,219.085],
[42,1491.6948,6575.485,401.3718,219.085],
[43,421.0318,6801.4579,401.3718,197.4285],
[44,1486.1115,6801.4579,401.3718,197.4285],
[45,1478.8011,6924.7018,401.3718,191.1845],
[46,1474.5172,7090.2575,401.3718,293.7057],
[47,418.4019,6845.803,401.3718,197.4285],
[48,1483.2387,6845.803,401.3718,197.4285],
[49,1483.2387,6799.4153,401.3718,290.2038]
];


// ==========================================
// 4. CREATE THE ARTWORKS
// ==========================================

artworks.forEach((art, index) => {

    const [
        name, x, y, width, height, rotation, buttonIDs
    ] = art;

    const img = document.createElement("img");

    img.src = `artworks/${name}.png`;
    img.alt = name;
    img.className = "artwork";

    // Convert Illustrator centre coordinates to CSS
    positionFromCenter(img, x, y, width, height);

    // Preserve artwork rotation
    if (rotation !== 0) {
        img.style.transform = `rotate(${rotation}deg)`;
    }

    img.dataset.buttons = buttonIDs.join(" ");

    img.onerror = () => {
        console.warn(`Artwork not found: ${img.src}`);
    };

    artworkLayer.appendChild(img);
});


// ==========================================
// 5. CREATE THE 49 IMAGE BUTTONS
// ==========================================

buttons.forEach((position, index) => {

    const [x, y, width, height] = position;

    const buttonID = index + 1;

    const button = document.createElement("button");

    button.className = "image-button";
    button.type = "button";

    button.setAttribute(
        "aria-label",
        `Image button ${buttonID}`
    );

    // Convert Illustrator centre coordinates to CSS
    positionFromCenter(button, x, y, width, height);

    const img = document.createElement("img");

    const filename = String(buttonID).padStart(2, "0");

    img.src = `Buttons/button-${filename}.png`;
    img.alt = "";

    img.onerror = () => {
        console.warn(`Button image not found: ${img.src}`);
    };

    button.appendChild(img);

    // Hover interaction
    button.addEventListener("mouseenter", () => {
        activateButton(buttonID);
    });

    button.addEventListener("mouseleave", () => {
        deactivateButton(buttonID);
    });

    // Keyboard interaction
    button.addEventListener("focus", () => {
        activateButton(buttonID);
    });

    button.addEventListener("blur", () => {
        deactivateButton(buttonID);
    });

    buttonLayer.appendChild(button);
});


// ==========================================
// 6. CREATE THE INFORMATION IMAGES
// ==========================================

information.forEach((item, index) => {

    const [buttonID, x, y, width, height] = item;

    const img = document.createElement("img");

    const filename = String(index + 1).padStart(2, "0");

    img.src = `information/info-${filename}.png`;

    img.alt = `Information for button ${buttonID}`;

    img.className = "information-image";

    // Convert Illustrator centre coordinates to CSS
    positionFromCenter(img, x, y, width, height);

    img.dataset.button = buttonID;

    img.onerror = () => {
        console.warn(`Information image not found: ${img.src}`);
    };

    informationLayer.appendChild(img);
});


// ==========================================
// 7. HOVER INTERACTION SYSTEM
// ==========================================

function activateButton(buttonID) {

    // Highlight associated artworks
    const associatedArtworks = document.querySelectorAll(
        `.artwork[data-buttons~="${buttonID}"]`
    );

    associatedArtworks.forEach(artwork => {
        artwork.classList.add("highlighted");
    });

    // Display the associated information image
    const infoImage = document.querySelector(
        `.information-image[data-button="${buttonID}"]`
    );

    if (infoImage) {
        infoImage.classList.add("visible");
    }
}


function deactivateButton(buttonID) {

    // Remove artwork highlights
    const associatedArtworks = document.querySelectorAll(
        `.artwork[data-buttons~="${buttonID}"]`
    );

    associatedArtworks.forEach(artwork => {
        artwork.classList.remove("highlighted");
    });

    // Hide information image
    const infoImage = document.querySelector(
        `.information-image[data-button="${buttonID}"]`
    );

    if (infoImage) {
        infoImage.classList.remove("visible");
    }
}


// ==========================================
// 8. RESPONSIVE ARTBOARD SCALING
// ==========================================

function resizeGallery() {

    const availableWidth = container.clientWidth;

    const scale = availableWidth / ARTBOARD_WIDTH;

    gallery.style.transform = `scale(${scale})`;

    // Adjust container height to match scaled artboard
    container.style.height =
        `${ARTBOARD_HEIGHT * scale}px`;
}

window.addEventListener("resize", resizeGallery);

resizeGallery();