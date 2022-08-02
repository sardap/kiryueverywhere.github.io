import { openDialog } from 'vue3-promise-dialog';
import StatsDialog from './components/StatsDialog.vue';

export async function confirm() {
    return await openDialog(StatsDialog);
}

const first_date = new Date(2022, 6, 28, 0, 0, 0);

export function getLocationNumber() {
    const today = new Date();
    const oneDay = 24 * 60 * 60 * 1000;
    const l = today.getTime();
    const r = first_date.getTime();
    return Math.floor(Math.abs((l - r) / oneDay));
}
