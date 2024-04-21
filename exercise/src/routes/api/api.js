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


//delete the contact, if it exists
router.delete("/contacts/:id", async (req, res) => {
    const { id } = req.params;

    await deleteContact(id);
    return res.sendStatus(204); // status 204 => no content to return
});

//update details of the contact specified by the id if it exists
router.patch("/contacts/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const updated = await updateContact(iq, req.body);
        if (!updated) return res.status(404).send(`Contact ${id} not found.`)
        return res.sendStatus(204);
    } catch (err) {
        return res.status(422).send(err);
    }
});



export default router;