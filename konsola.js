// Require the lib, get a working terminal
const term = require( 'terminal-kit' ).terminal ;

class konsola
{
    static log( msg_arg )
    {
        term( msg_arg + '\n' );
    } // log()

    static msg( msg_arg )
    {
        term.bold.yellow( msg_arg + '\n' );
    } // msg()

    static warn( msg_arg )
    {
        term.bold.red( msg_arg + '\n' );
    } // warn()

} // konsola class


const test = () =>
{
    // The term() function simply output a string to stdout, using current style
    // output "Hello world!" in default terminal's colors
    konsola.log( 'konsola.log()' );
    
    // This output 'red' in red
    konsola.msg( 'konsola.msg()' );
    
    // This output 'bold' in bold
    konsola.warn( 'konsola.warn()');
} // test()

test();

exports.konsola = konsola;