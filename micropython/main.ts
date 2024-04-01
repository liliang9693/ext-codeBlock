
//% color="#AA278D" iconWidth=50 iconHeight=40
namespace CodeBlock {
    //% block="import [STR]"  blockType="command"
    //% STR.shadow="string" STR.defl="math"
    export function include(parameter:any){
        let str=parameter.STR.code;
        if(str.substring(0,1)=="\"")  str=str.substring(1,str.length-1);
        Generator.addImport(`import ${str}`);

        
    }
    //% block="from [STR] import [STR2] "  blockType="command"
    //% STR.shadow="string" STR.defl="math"
    //% STR2.shadow="string" STR2.defl="*"
    export function include2(parameter:any){
        let str=parameter.STR.code;
        let str2=parameter.STR2.code;
        if(str.substring(0,1)=="\"")  str=str.substring(1,str.length-1);
        if(str2.substring(0,1)=="\"")  str2=str2.substring(1,str2.length-1);
        Generator.addImport(`from ${str} import ${str2}`);

        
    }

    //% block="import [STR] as [STR2] "  blockType="command"
    //% STR.shadow="string" STR.defl="math"
    //% STR2.shadow="string" STR2.defl="m"
    export function include3(parameter:any){
        let str=parameter.STR.code;
        let str2=parameter.STR2.code;
        if(str.substring(0,1)=="\"")  str=str.substring(1,str.length-1);
        if(str2.substring(0,1)=="\"")  str2=str2.substring(1,str2.length-1);
        Generator.addImport(`import ${str} as ${str2}`);

        
    }

  
    //% block="[OBJ] [OBJNAME]"   blockType="command"
    //% OBJ.shadow="string" OBJ.defl="Test"
    //% OBJNAME.shadow="string" OBJNAME.defl="test"
    export function object(parameter:any){
        let obj=parameter.OBJ.code;
        let name=parameter.OBJNAME.code;

        if(obj.substring(0,1)=="\"")  obj=obj.substring(1,obj.length-1);
        if(name.substring(0,1)=="\"")  name=name.substring(1,name.length-1);
 
        Generator.addDeclaration(`CodeBlockObject${obj}${name}`,`${obj} ${name}`);

        
    }


    //% block="[OBJ]"   blockType="command"
    //% OBJ.shadow="string" OBJ.defl="test=1"
    export function objectAny(parameter:any){
        let obj=parameter.OBJ.code;

        if(obj.substring(0,1)=="\"")  obj=obj.substring(1,obj.length-1);
        obj = removeSlash(obj);
 
        Generator.addDeclaration(`CodeBlockObjectAny${obj}`,`${obj}`);

        
    }

    //% block="setUp:[SETUP]"   blockType="command"
    //% SETUP.shadow="string" SETUP.defl="print('hello world')"

    export function setupAny(parameter:any){
        let code=parameter.SETUP.code;
        code = removeSlash(code);
        if(code.substring(0,1)=="\"")  code=code.substring(1,code.length-1);

 
        Generator.addInit(`CodeBlockSetupAny${code}`,`${code}`);

        
    }
    //% block="Code:[CODE]"   blockType="command"
    //% CODE.shadow="string" CODE.defl="print('hello world')"

    export function codeAny(parameter:any){
        let code=parameter.CODE.code;
        code = removeSlash(code);
        if(code.substring(0,1)=="\"") code=code.substring(1,code.length-1);

 
        Generator.addCode(`${code}`);

        
    }
    
    //% block="Code:[CODE]"   blockType="reporter"
    //% CODE.shadow="string" CODE.defl="1"

    export function codeAnyRp(parameter:any){
        let code=parameter.CODE.code;
        code = removeSlash(code);
        if(code.substring(0,1)=="\"") code=code.substring(1,code.length-1);

 
        Generator.addCode([`${code}`, Generator.ORDER_UNARY_POSTFIX]);

        
    }

    //% block="Code:[CODE]"   blockType="boolean"
    //% CODE.shadow="string" CODE.defl="2>1"
    export function codeAnybo(parameter:any){
        let code=parameter.CODE.code;
        code = removeSlash(code);
        if(code.substring(0,1)=="\"") code=code.substring(1,code.length-1);

 
        Generator.addCode([`${code}`, Generator.ORDER_UNARY_POSTFIX]);

        
    }
    function removeSlash(str: string): string {
      const regex = /\\/g;
      return str.replace(regex, '');
    }


}
