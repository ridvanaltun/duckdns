const axios = require('axios');

module.exports.updateIpAddress = (ip, domain, token, http = false, ipv6 = false) => {
  let reqDomain = http ? 'http://www.duckdns.org/update?' : 'https://www.duckdns.org/update?';
  reqDomain += ipv6 ? 'ipv6=' : 'ip=';
  reqDomain += ip + '&domains=' + domain + '&token=' + token;

  return axios.get(reqDomain)
    .then(function (response) {
      const body = response['data'];
      if (body === 'OK') {
        // handle success
        return true;
      } else {
        // handle unsuccessful
        return false;
      }
      console.log(response['data']);
    })
    .catch(function (error) {
      // handle error
      return false;
    });
}

module.exports.clear = (domain, token, http = false) => {
  let reqDomain = http ? 'http://www.duckdns.org/update?' : 'https://www.duckdns.org/update?';
  reqDomain += 'domains=' + domain + '&token=' + token;

  return axios.get(reqDomain)
    .then(function (response) {
      const body = response['data'];
      if (body === 'OK') {
        // handle success
        return true;
      } else {
        // handle unsuccessful
        return false;
      }
      console.log(response['data']);
    })
    .catch(function (error) {
      // handle error
      return false;
    });
}
