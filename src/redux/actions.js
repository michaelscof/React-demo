export function saveAction(data) {
    console.log('action called');
    return {
        type: 'add',
        user: data
    }
}