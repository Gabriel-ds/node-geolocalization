class GeoLib {
    public getAddressFromCoordinates(coordinates: [number, number] | { lat: number; lng: number }): Promise<string> {
        try {
            const address = 'Rua fulano de tal'
            return Promise.resolve(address)
        } catch (error) {
            return Promise.reject(new Error('Error to get address'));
        }
    };

    public getCoordinatesFromAddress(address: string): Promise<[number, number]> {
        try {
            // const coordinates = { lat: 1, lng: 2 }
            const coordinates: [number, number] = [1, 2]
            return Promise.resolve(coordinates)
        } catch (error) {
            return Promise.reject(new Error('Error to get coordinates'));
        }
    };
}

export default new GeoLib();
