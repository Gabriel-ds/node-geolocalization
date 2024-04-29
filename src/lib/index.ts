// class GeoLib {
//     public getAddressFromCoordinates(coordinates: [number, number] | { lat: number; lng: number }): Promise<string> {
//         try {
//             const address = 'Rua fulano de tal'
//             return Promise.resolve(address)
//         } catch (error) {
//             return Promise.reject(new Error('Error to get address'));
//         }
//     };

//     public getCoordinatesFromAddress(address: string): Promise<[number, number]> {
//         try {
//             // const coordinates = { lat: 1, lng: 2 }
//             const coordinates: [number, number] = [1, 2]
//             return Promise.resolve(coordinates)
//         } catch (error) {
//             return Promise.reject(new Error('Error to get coordinates'));
//         }
//     };
// }

// export default new GeoLib();


import axios from 'axios';

class GeoLib {
    async getAddressFromCoordinates(coordinates: any) {
        console.log("Teste 1 ===>>", coordinates)
        try {
            let response;
            if (Array.isArray(coordinates)) {
                response = await axios.get(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${coordinates[0]}&lon=${coordinates[1]}`, {
                    headers: {
                        'Accept': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    }
                });
                console.log("Teste 3 ===>>", response?.data)
            } else {
                throw new Error('Invalid coordinates format');
            }

            if (response?.data?.display_name) {
                return `${response.data.display_name}`;
            } else {
                throw new Error('Address not found');
            }
        } catch (error) {
            throw new Error('Error to get address');
        }
    }

    async getCoordinatesFromAddress(address: any) {
        try {
            const response = await axios.get(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`);

            if (Array.isArray(response.data) && response.data.length > 0) {
                const { lat, lon } = response.data[0];
                return [parseFloat(lat), parseFloat(lon)];
            } else {
                throw new Error('Coordinates not found');
            }
        } catch (error) {
            console.error('Error getting coordinates:', error);
            throw new Error('Error to get coordinates');
        }
    }
}

export default new GeoLib();