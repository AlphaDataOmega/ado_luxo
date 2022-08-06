import React from 'react'
import { create, CID, IPFSHTTPClient } from "ipfs-http-client";

const projectId = "<YOUR PROJECT ID>";
const projectSecret = "<YOUR PROJECT SECRET>";
const authorization = "Basic " + btoa(projectId + ":" + projectSecret);

let ipfs: IPFSHTTPClient | undefined;
  try {
    ipfs = create({
        url: "https://ipfs.infura.io:5001/api/v0",
        headers: { authorization }
    });
  } catch (error) {
    console.error("IPFS error ", error);
    ipfs = undefined;
  }

const [images, setImages] = React.useState<{ cid: CID; path: string }[]>([]);

const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
event.preventDefault();
const form = event.target as HTMLFormElement;
const files = (form[0] as HTMLInputElement).files;

if (!files || files.length === 0) {
    return alert("No files selected");
}

const file = files[0];
// upload files
const result = await (ipfs as IPFSHTTPClient).add(file);

setImages([
    ...images,
    {
    cid: result.cid,
    path: result.path,
    },
]);

form.reset();
};


function saveIPFS() {
    return await (ipfs as IPFSHTTPClient).add(file)
}