import * as sessionsDao from '../dao/sessions.dao.js';

export async function findByEmail(email) {
    return sessionsDao.findByEmail(email);
}

export async function create(newUser) {
    return sessionsDao.create(newUser);
}