import lib from '../lib';


export const resolveCoordinatesAndAddress = async (address: string, coordinates: [number, number]) => {
    if ((address && coordinates) || (!address && !coordinates)) {
        return { error: 'Please provide either address or coordinates' };
    }
    let userCoordinates: [number, number] | undefined = coordinates
    let userAddress: string | undefined = address

    if (address) {
        userCoordinates = await lib.getCoordinatesFromAddress(address);
    } else if (coordinates) {
        userAddress = await lib.getAddressFromCoordinates(coordinates)
    }

    return { userCoordinates, userAddress };
};