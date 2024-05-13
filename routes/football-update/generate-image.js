const { createCanvas, loadImage, registerFont } = require('canvas');

const generateImage = async (data) => {
    // NOTE: register font
    registerFont('public/fonts/Arial.ttf', { family: 'Arial' });
    registerFont('public/fonts/Georgia.ttf', { family: 'Georgia' });
    registerFont('public/fonts/Impact.ttf', { family: 'Impact' });

    const { team_short_home, team_short_away, logo_home, logo_away, score_home, score_away, competition } = data;
    const cover = data?.cover || 'public/blur.png';
    const canvasWidth = 500;
    const canvasHeight = 500;
    const canvas = createCanvas(canvasWidth, canvasHeight);
    const ctx = canvas.getContext('2d');

    ctx.font = '30px Impact';
    const backgroundImage = await loadImage(cover);
    const bar = await loadImage('public/bar.png');

    const vsText = '-';
    const competitionText = competition.toUpperCase();

    const scale = canvasHeight / backgroundImage.height;
    const width = backgroundImage.width * scale;
    const offsetX = (width - canvasWidth) / 2;

    ctx.drawImage(backgroundImage, -offsetX, 0, width, canvasHeight);

    ctx.drawImage(bar, 0, 290, bar.width, bar.height);

    ctx.fillStyle = 'white';
    ctx.font = 'bold 80px Impact';
    ctx.fillText(vsText, (bar.width - ctx.measureText(vsText).width) / 2, 370);

    ctx.font = 'bold 13px Arial';
    ctx.textAlign = 'center';
    ctx.shadowColor = 'rgba(0, 0, 0, 0.2)';
    ctx.shadowBlur = 4;
    ctx.shadowOffsetX = 1;
    ctx.shadowOffsetY = 1;
    ctx.strokeText(competitionText, bar.width / 2, 480);
    ctx.fillText(competitionText, bar.width / 2, 480);

    ctx.font = 'bold 120px Arial';
    ctx.fillText(score_home, 190, 390);
    ctx.fillText(score_away, 310, 390);

    const logoHome = await loadImage(logo_home);
    const logoAway = await loadImage(logo_away);
    ctx.globalAlpha = 0.9;
    ctx.drawImage(logoHome, 50, 310, 50, 50);
    ctx.drawImage(logoAway, 375, 310, 50, 50);

    ctx.font = '20px Georgia';
    ctx.fillText(team_short_home, 80, 380);
    ctx.fillText(team_short_away, 405, 380);
    const base64Data = canvas.toDataURL('image/png').replace(/^data:image\/png;base64,/, '');

    return base64Data;
};

module.exports = generateImage;
