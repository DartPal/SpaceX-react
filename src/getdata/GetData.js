export default class GetData {

    startUrl = 'https://api.spacexdata.com/v4/';

    getData = async url => {
        const res = await fetch(url);

        if(!res.ok) {
            throw new Error(`Произошла ошибка ${res.status}`);
        }

        return await res.json();
    }

    getRocket = async () =>
        await this.getData(this.startUrl + 'rockets');

    getLaunches = async () =>
        await this.getData(this.startUrl + 'launches/past');

    getCompanies = async () =>
        await this.getData(this.startUrl + 'company');
}