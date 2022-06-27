export function interpolate(template, object) {
    for (let key in object) {
        const val = object[key]
        template = template.replaceAll(`{{${key}}}`, val)

        if (typeof val === 'object') {
            template = interpolate(template, val)
        }
    }
    return template;
}

export function debounce(fn, timeout = 300) {
    let timerId = null;
    return (...rest) => {
        clearTimeout(timerId);
        timerId = setTimeout(() => fn(...rest), timeout);
    };
}