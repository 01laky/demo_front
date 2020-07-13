import axios from 'axios';
import Promise from 'bluebird';
import _ from 'lodash';

// eslint-disable-next-line import/prefer-default-export
export const createNote = data => new Promise((resolve, reject) => {
  axios.post('http://localhost:8081/notes', data)
    .then(response => resolve(_.get(response, 'data', null)))
    .catch(error => reject(error));
});

export const updateNote = (data, noteId) => new Promise((resolve, reject) => {
  console.log('UPD DATA => ', data)
  axios.put(`http://localhost:8081/notes/${noteId}`, data)
    .then(response => resolve(_.get(response, 'data', null)))
    .catch(error => reject(error));
});
