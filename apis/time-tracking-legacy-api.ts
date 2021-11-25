/* tslint:disable */
/* eslint-disable */
/**
 * clickup client
 * You can follow along at [https://clickup20.docs.apiary.io/#introduction/oauth2](https://clickup20.docs.apiary.io/#introduction/oauth2).  You'll need your personal token for this, just change the authorization header to include it.
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
/**
 * TimeTrackingLegacyApi - axios parameter creator
 * @export
 */
export const TimeTrackingLegacyApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Delete Time Tracked
         * @param {string} taskId 
         * @param {string} intervalId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteTimeTracked: async (taskId: string, intervalId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'taskId' is not null or undefined
            if (taskId === null || taskId === undefined) {
                throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling deleteTimeTracked.');
            }
            // verify required parameter 'intervalId' is not null or undefined
            if (intervalId === null || intervalId === undefined) {
                throw new RequiredError('intervalId','Required parameter intervalId was null or undefined when calling deleteTimeTracked.');
            }
            const localVarPath = `/api/v2/task/{task_id}/time/{interval_id}`
                .replace(`{${"task_id"}}`, encodeURIComponent(String(taskId)))
                .replace(`{${"interval_id"}}`, encodeURIComponent(String(intervalId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyAuth required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Edit Time Tracked
         * @param {string} body 
         * @param {string} taskId 
         * @param {string} intervalId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        editTimeTracked: async (body: string, taskId: string, intervalId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling editTimeTracked.');
            }
            // verify required parameter 'taskId' is not null or undefined
            if (taskId === null || taskId === undefined) {
                throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling editTimeTracked.');
            }
            // verify required parameter 'intervalId' is not null or undefined
            if (intervalId === null || intervalId === undefined) {
                throw new RequiredError('intervalId','Required parameter intervalId was null or undefined when calling editTimeTracked.');
            }
            const localVarPath = `/api/v2/task/{task_id}/time/{interval_id}`
                .replace(`{${"task_id"}}`, encodeURIComponent(String(taskId)))
                .replace(`{${"interval_id"}}`, encodeURIComponent(String(intervalId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyAuth required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
            }

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get Time Tracked
         * @param {string} taskId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTimeTracked: async (taskId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'taskId' is not null or undefined
            if (taskId === null || taskId === undefined) {
                throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling getTimeTracked.');
            }
            const localVarPath = `/api/v2/task/{task_id}/time/`
                .replace(`{${"task_id"}}`, encodeURIComponent(String(taskId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyAuth required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Track Time
         * @param {string} body 
         * @param {string} taskId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        trackTime: async (body: string, taskId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling trackTime.');
            }
            // verify required parameter 'taskId' is not null or undefined
            if (taskId === null || taskId === undefined) {
                throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling trackTime.');
            }
            const localVarPath = `/api/v2/task/{task_id}/time`
                .replace(`{${"task_id"}}`, encodeURIComponent(String(taskId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyAuth required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
            }

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TimeTrackingLegacyApi - functional programming interface
 * @export
 */
export const TimeTrackingLegacyApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Delete Time Tracked
         * @param {string} taskId 
         * @param {string} intervalId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteTimeTracked(taskId: string, intervalId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await TimeTrackingLegacyApiAxiosParamCreator(configuration).deleteTimeTracked(taskId, intervalId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Edit Time Tracked
         * @param {string} body 
         * @param {string} taskId 
         * @param {string} intervalId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async editTimeTracked(body: string, taskId: string, intervalId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await TimeTrackingLegacyApiAxiosParamCreator(configuration).editTimeTracked(body, taskId, intervalId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Get Time Tracked
         * @param {string} taskId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTimeTracked(taskId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await TimeTrackingLegacyApiAxiosParamCreator(configuration).getTimeTracked(taskId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Track Time
         * @param {string} body 
         * @param {string} taskId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async trackTime(body: string, taskId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await TimeTrackingLegacyApiAxiosParamCreator(configuration).trackTime(body, taskId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * TimeTrackingLegacyApi - factory interface
 * @export
 */
export const TimeTrackingLegacyApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Delete Time Tracked
         * @param {string} taskId 
         * @param {string} intervalId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteTimeTracked(taskId: string, intervalId: string, options?: any): AxiosPromise<void> {
            return TimeTrackingLegacyApiFp(configuration).deleteTimeTracked(taskId, intervalId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Edit Time Tracked
         * @param {string} body 
         * @param {string} taskId 
         * @param {string} intervalId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        editTimeTracked(body: string, taskId: string, intervalId: string, options?: any): AxiosPromise<void> {
            return TimeTrackingLegacyApiFp(configuration).editTimeTracked(body, taskId, intervalId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get Time Tracked
         * @param {string} taskId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTimeTracked(taskId: string, options?: any): AxiosPromise<void> {
            return TimeTrackingLegacyApiFp(configuration).getTimeTracked(taskId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Track Time
         * @param {string} body 
         * @param {string} taskId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        trackTime(body: string, taskId: string, options?: any): AxiosPromise<void> {
            return TimeTrackingLegacyApiFp(configuration).trackTime(body, taskId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TimeTrackingLegacyApi - object-oriented interface
 * @export
 * @class TimeTrackingLegacyApi
 * @extends {BaseAPI}
 */
export class TimeTrackingLegacyApi extends BaseAPI {
    /**
     * 
     * @summary Delete Time Tracked
     * @param {string} taskId 
     * @param {string} intervalId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TimeTrackingLegacyApi
     */
    public deleteTimeTracked(taskId: string, intervalId: string, options?: any) {
        return TimeTrackingLegacyApiFp(this.configuration).deleteTimeTracked(taskId, intervalId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Edit Time Tracked
     * @param {string} body 
     * @param {string} taskId 
     * @param {string} intervalId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TimeTrackingLegacyApi
     */
    public editTimeTracked(body: string, taskId: string, intervalId: string, options?: any) {
        return TimeTrackingLegacyApiFp(this.configuration).editTimeTracked(body, taskId, intervalId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Get Time Tracked
     * @param {string} taskId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TimeTrackingLegacyApi
     */
    public getTimeTracked(taskId: string, options?: any) {
        return TimeTrackingLegacyApiFp(this.configuration).getTimeTracked(taskId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Track Time
     * @param {string} body 
     * @param {string} taskId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TimeTrackingLegacyApi
     */
    public trackTime(body: string, taskId: string, options?: any) {
        return TimeTrackingLegacyApiFp(this.configuration).trackTime(body, taskId, options).then((request) => request(this.axios, this.basePath));
    }
}
