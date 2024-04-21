import { Router } from "express";

import {
    retrieveContacts,
    updateContact,
    deleteContact,
    createContact // CRUD^^
} from "../../data/contacts-dao.js";
//^^ going back two folders using ../../

//config router
const router = Router();

//create contact. will receive json contact for the contact from the client
router.post("/contacts", async (req, res) => {
    try {
        const contact = await createContact(req.body);
        return res.status(201).location(`/contacts/${contact._id}`).json(contact);
    } catch (err) {
        return res.status(422).send(err);
    }
});

//get all contacts
router.get("/contacts", async (req, res) => {
    return res.json(await retrieveContacts());
  });
  


export default router;