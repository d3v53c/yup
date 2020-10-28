import locale from './locale';

export default function setLocale(custom) {
  Object.keys(custom).forEach(type => {
    if (type === '__proto__' || type === 'proto') {
      return;
    }

    Object.keys(custom[type]).forEach(method => {
      locale[type][method] = custom[type][method];
    });
  });
}
