import { LightningElement, api } from 'lwc';

export default class ConfirmationModal extends LightningElement {

    @api visible; // Hide/show dialog
    @api title = ''; // Modal header
    @api name; // Reference name of the component
    @api message = ''; // Modal message
    @api confirmLabel = ''; // Confirm button label
    @api cancelLabel = ''; // Cancel button label
    @api originalMessage; // Message to publish back to the parent component
    disableButtons = false;

    /**
     * Handles button clicks
     * @param {*} event 
     */
    handleClick(event) {

        // Event Data
        let finalEvent = {
            originalMessage: this.originalMessage,
            status: event.target.name
        };

        // Dispatch click event for handle it in parent component
        this.dispatchEvent(new CustomEvent('modalaction', {detail: finalEvent}));
        this.disableButtons = true;
    }

}