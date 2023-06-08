import axios from "axios";
import { useCallback } from "react";

const useRequest = ({ baseURL }: { baseURL: string }) => {

        const makeRequest = useCallback(
                () => axios.create({
                        baseURL,
                }),
                [],
        )

        return makeRequest()
}

export default useRequest;