import axios from 'axios';
import Promise from 'bluebird';
import _ from 'lodash';

// eslint-disable-next-line import/prefer-default-export
export const loadNoteList = () => new Promise((resolve, reject) => {
  axios.get('http://localhost:8081/notes', { crossDomain: true })
    .then(response => resolve(_.get(response, 'data', [])))
    .catch(error => reject(error));
});
