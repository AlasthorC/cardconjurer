if (!loadedVersions.includes('m15Planeswalker/regular')) {
	loadedVersions.push('m15Planeswalker/regular')
	loadFrameImages([
        ['White Frame', '/data/images/cardImages/planeswalker/planeswalkerFrameW.png', 0, 0, 1, 1, ['Full', 'Pinline (planeswalker)', 'Title (planeswalker)', 'Type (planeswalker)', 'Frame (planeswalker)', 'Border (planeswalker)']],
        ['Blue Frame', '/data/images/cardImages/planeswalker/planeswalkerFrameU.png', 0, 0, 1, 1, ['Full', 'Pinline (planeswalker)', 'Title (planeswalker)', 'Type (planeswalker)', 'Frame (planeswalker)', 'Border (planeswalker)']],
        ['Black Frame', '/data/images/cardImages/planeswalker/planeswalkerFrameB.png', 0, 0, 1, 1, ['Full', 'Pinline (planeswalker)', 'Title (planeswalker)', 'Type (planeswalker)', 'Frame (planeswalker)', 'Border (planeswalker)']],
        ['Red Frame', '/data/images/cardImages/planeswalker/planeswalkerFrameR.png', 0, 0, 1, 1, ['Full', 'Pinline (planeswalker)', 'Title (planeswalker)', 'Type (planeswalker)', 'Frame (planeswalker)', 'Border (planeswalker)']],
        ['Green Frame', '/data/images/cardImages/planeswalker/planeswalkerFrameG.png', 0, 0, 1, 1, ['Full', 'Pinline (planeswalker)', 'Title (planeswalker)', 'Type (planeswalker)', 'Frame (planeswalker)', 'Border (planeswalker)']],
        ['Multicolored Frame', '/data/images/cardImages/planeswalker/planeswalkerFrameM.png', 0, 0, 1, 1, ['Full', 'Pinline (planeswalker)', 'Title (planeswalker)', 'Type (planeswalker)', 'Frame (planeswalker)', 'Border (planeswalker)']],
        ['Artifact Frame', '/data/images/cardImages/planeswalker/planeswalkerFrameA.png', 0, 0, 1, 1, ['Full', 'Pinline (planeswalker)', 'Title (planeswalker)', 'Type (planeswalker)', 'Frame (planeswalker)', 'Border (planeswalker)']],
        ['Colorless Frame', '/data/images/cardImages/planeswalker/planeswalkerFrameC.png', 0, 0, 1, 1, ['Full', 'Pinline (planeswalker)', 'Title (planeswalker)', 'Type (planeswalker)', 'Frame (planeswalker)', 'Border (planeswalker)']],
        ['Dark Twins', '/data/images/cardImages/planeswalker/planeswalkerDarkTwins.png', 0, 0, 1, 1, ['Full', 'Pinline (planeswalker)', 'Title (planeswalker)', 'Type (planeswalker)', 'Frame (planeswalker)', 'Border (planeswalker)']],
        ['Holo Stamp', '/data/images/cardImages/stamp.png', 338/744, 951/1039, 70/744, 36/1039, ['Full', 'Pinline (planeswalker)', 'Title (planeswalker)', 'Type (planeswalker)', 'Frame (planeswalker)', 'Border (planeswalker)']],
        ['White Border', '/data/images/cardImages/white.png', 0, 0, 1, 1, ['Alternative Border', 'Alternative Border (Crown)', 'Border (m15)']],
        ['Silver Border', '/data/images/cardImages/silver.png', 0, 0, 1, 1, ['Alternative Border', 'Alternative Border (Crown)', 'Border (m15)']],
        ['Gold Border', '/data/images/cardImages/gold.png', 0, 0, 1, 1, ['Alternative Border', 'Alternative Border (Crown)', 'Border (m15)']]
    ], 'frameClassPlaneswalkerRegular')
}

hideFrameImages('frameClassPlaneswalkerRegular')