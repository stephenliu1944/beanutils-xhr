import { isBlank } from 'utils/common';

// 根据 baseURL 生成代理拦截的 url
export function proxyBaseURL(baseURL = '') {
    var _baseURL = baseURL?.trim();

    // 如果为空则使用当前服务的 host
    if (isBlank(_baseURL)) {
        _baseURL = `${location.protocol}//${location.host}`;
    } else if (_baseURL.startsWith('//')) {
        _baseURL = location.protocol + _baseURL;
    }
    // 截取开始和末尾的 '/'
    var host = _baseURL.replace(/^\//, '').replace(/\/$/, '');

    return `/${host}`;
}