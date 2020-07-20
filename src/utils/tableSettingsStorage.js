const KEY = "tableSettings";
export const tableSettingsStorage = {
    save: (tableName, settingsName, value) => {
        const queries = tableSettingsStorage.get();
        if (queries[tableName] == null) {
            queries[tableName] = {};
        }
        queries[tableName][settingsName] = value;
        window.localStorage.setItem(KEY, JSON.stringify(queries));
    },
    delete: () => {
        window.localStorage.removeItem(KEY);
    },
    get: () => JSON.parse(window.localStorage.getItem(KEY) || "{}"),
    getByTableName: (tableName) => {
        return tableSettingsStorage.get()[tableName];
    },
    getBySetting: (tableName, settingsName) => {
        return tableSettingsStorage.get()?.[tableName]?.[settingsName];
    },
};
