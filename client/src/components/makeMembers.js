const makeMembers = (n) => {
    const num = n || 15;
    const membersList = [];
    for (let i = 0; i < num; i++) {
        membersList.push({
            id: i,
            first_Name: `First ${i}`,
            last_Name: `Last ${i}`,
            title: `Member # ${i}`,
            party: "R",
            chamber: "House",
        });
    }
    return membersList;
}

export const membersList = makeMembers(200);