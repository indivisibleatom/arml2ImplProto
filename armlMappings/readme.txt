To create json bindings from a schema XSD file:
java -jar jsonix-schema-compiler-full-2.2.0.jar -d <directoryName> -p <name of js file> <name of xsd file> -b <name of bindings file>
Example: java -jar jsonix-schema-compiler-full-2.2.0.jar -d armlMappings -p armlJSONSchema armlXsd.xml -b bindings.xjb