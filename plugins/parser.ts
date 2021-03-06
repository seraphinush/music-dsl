import NODE from "~/plugins/NODE";
import PROGRAM from "~/plugins/PROGRAM";
import tokenizer from "~/plugins/tokenizer";

import scripts from '~/pages/scripts.js'

export const resultXML: string = "";

const parser = {

  parse(user_input: string): string {
    let program: NODE = new PROGRAM();

    let msg = 'Sheet music generated successfully!'

    try {
      tokenizer.tokenize(user_input);

      program.parse();
      //...type checking...
      // program.support_check();
      // program.name_check(); //Assert print uses sections that actually exist
      // program.duration_check(); //Assert sections in print have same duration

      program.evaluate();
      console.log(program.get_xml());
      
      scripts.updateStatus(msg)
      return program.get_xml();

    } catch (e) {
      msg = e
      console.warn(e);
    }
    
    
    scripts.updateStatus(msg)
    return program.get_xml();
  }

};

export default parser;
