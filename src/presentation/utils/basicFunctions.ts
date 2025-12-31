export const getInitalsName = (nameParam: string | null) => {
    if (!nameParam) {
        return 'se necesita un nombre';
    }
    const newName = nameParam?.split(' ');
    if (newName?.length < 2) {
        return newName[0][0].toUpperCase();
    } else if (newName?.length > 1) {
        const res =
            !newName[0] || !newName[1]
                ? 'falta un nombre'
                : `${newName[0][0].toUpperCase()}${newName[1][0].toUpperCase()}`;
        return res;
    }

    return 'CT';
};
