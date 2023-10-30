import type { IActivityHandler } from "@vertigis/workflow";

/** An interface that defines the inputs of the activity. */
interface SetLocalStorageItemActivityInputs {
    /**
     * @displayName keyName
     * @description A string containing the name of the key you want to create/update.
     * @required
    */
   keyName: string;
   
   /**
    * @displayName keyValue
    * @description A string containing the value you want to give the key you are creating/updating.
    * @required
    */
    keyValue: string;
}


/** An interface that defines the outputs of the activity. */
interface SetLocalStorageItemActivityOutputs {
    /**
     * @description The result of the activity.
     */
    result: object;
}


/**
 * @displayName Set localStorage Item
 * @category localStorage
 * @description Add an item to browser localStorage object
 */
export default class SetLocalStorageItemActivity implements IActivityHandler {
    /** Perform the execution logic of the activity. */
    async execute(inputs: SetLocalStorageItemActivityInputs): Promise<SetLocalStorageItemActivityOutputs> {
        const { keyName, keyValue } = inputs;
        let message = "";

        if (typeof(keyName) !== undefined && keyName !== null) {
            if (typeof(keyValue) !== undefined && keyValue !== null) {
                localStorage.setItem(keyName, keyValue);
                message = "Wrote value to localStorage";
            }
        } else {
            message = "Could not write value to localStorage"
        }
        return {
            result: {
                "message": message,
                "keyName": keyName,
                "keyValue": keyValue
            }
        };
    }
}
