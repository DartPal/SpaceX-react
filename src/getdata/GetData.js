export default class GetData {

    startUrl = 'https://api.spacexdata.com/v4/';

    getData = async startUrl => {
        const res = await fetch(startUrl);

        if(!res.ok) {
            throw new Error(`Произошла ошибка ${res.status}`);
        }

        return await res.json();
    }

    getRocket = async () => {
        await this.getData(this.startUrl + 'rockets');
    }

    getLaunches = async () => {
        await this.getData(this.startUrl + 'launches/pst');
    }

    getCompanies = async () => {
        await this.getData(this.startUrl + 'company');
    }
}