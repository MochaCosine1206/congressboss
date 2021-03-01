const makeMembers = (n) => {
    const num = n || 15;
    const membersList = [];
    for (let i = 0; i < num; i++) {
        membersList.push({
            id: i,
            title: `Member # ${i}`,
        });
    }
    return membersList;
}

export const membersList = makeMembers(200);