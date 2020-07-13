import axios from 'axios';
import Promise from 'bluebird';
import _ from 'lodash';

// eslint-disable-next-line import/prefer-default-export
export const deleteDetail = noteId => new Promise((resolve, reject) => {
  axios.delete(`http://localhost:8081/notes/${noteId}`)
    .then(response => resolve(_.get(response, 'data', [])))
    .catch(error => reject(error));
});

export const getNoteById = noteId => new Promise((resolve, reject) => {
  axios.get(`http://localhost:8081/notes/${noteId}`)
    .then(response => resolve(_.get(response, 'data', [])))
    .catch(error => reject(error));
});
