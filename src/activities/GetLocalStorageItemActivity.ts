import type { IActivityHandler } from "@vertigis/workflow";

/** An interface that defines the inputs of the activity. */
interface GetLocalStorageItemActivityInputs {
    /**
     * @displayName keyName
     * @description A string containing the name of the key you want to retrieve from localStorage
     * @required
     */
    keyName: string;

}

/** An interface that defines the outputs of the activity. */
interface GetLocalStorageItemActivityOutputs {
    /**
     * @description the returned keyValue from localStorage
     */
    result: string;
}

/**
 * @displayName Get localStorage Item
 * @category localStorage
 * @description Get an item from browser localStorage object
 */
export default class GetLocalStorageItemActivity implements IActivityHandler {
    /** Perform the execution logic of the activity. */
    async execute(inputs: GetLocalStorageItemActivityInputs): Promise<GetLocalStorageItemActivityOutputs> {
        const { keyName } = inputs;
        let keyValue = localStorage.getItem(keyName);
        return {
            result: `${keyValue}`,
        };
    }
}
