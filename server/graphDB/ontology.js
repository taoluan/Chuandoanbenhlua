const {EnapsoGraphDBClient} = require("@innotrade/enapso-graphdb-client");
const GRAPHDB_BASE_URL = process.env.GRAPHDB_BASE_URL,
    GRAPHDB_REPOSITORY = process.env.GRAPHDB_REPOSITORY,
    GRAPHDB_USERNAME = process.env.GRAPHDB_USERNAME,
    GRAPHDB_PASSWORD = process.env.GRAPHDB_PASSWORD,
    GRAPHDB_CONTEXT_TEST = process.env.GRAPHDB_CONTEXT_TEST;
const DEFAULT_PREFIXES = [
    EnapsoGraphDBClient.PREFIX_OWL,
    EnapsoGraphDBClient.PREFIX_RDF,
    EnapsoGraphDBClient.PREFIX_RDFS,
    EnapsoGraphDBClient.PREFIX_XSD,
    EnapsoGraphDBClient.PREFIX_PROTONS,
    {
        prefix: "data",
        iri: process.env.GRAPHDB_IRI_DATA,
    }
];
let graphDBEndpoint = new EnapsoGraphDBClient.Endpoint({
    baseURL: GRAPHDB_BASE_URL,
    repository: GRAPHDB_REPOSITORY,
    prefixes: DEFAULT_PREFIXES
});
module.exports = graphDBEndpoint;