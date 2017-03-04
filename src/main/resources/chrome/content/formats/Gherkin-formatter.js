/*--
History:

1.0:
	-Initial release
*/


var options = {row: "false",
defaultExtension: "feature",
sep : "    "
};




function formatCommands(commands) {
	var result = '',

		row_num = '',
		i,
		command;
	for (i = 0; i < commands.length; i ++) {
		command = commands[i];

		if (command.type === 'command') {
			var sep = options.sep;
			result += row_num + command.command + sep + command.target + sep + command.value  + '\n';
		}
	}

	return result;
}

function parse(testCase, source) {
	var doc = source,
		commands = [],

		line,
		line2,
		array,
		command,
		i;
	if (doc.length > 0) {
		line = doc.split(/\r?\n/);

		for (i = 0; i < line.length; i = i + 1) {
			line2 = line[i];
			array = line2.split(sep);
			if (array.length >= 2) {
				command = new Command();
				command.command = array[0];
				command.target = array[1];
					if (array.length >= 3) {
				command.value = array[2];
			}
				commands.push(command);
			}
		}
	}

	testCase.setCommands(commands);
}

function format(testCase, name) {

	var text;
	var commandsText = "";
	var testText;
	var i;

	commandsText = formatCommands(testCase.commands);


	var testText;
	if (testCase.header == null || testCase.footer == null) {
		var header = '//'+name + '\n';

		var baseUrl = testCase.getBaseURL()
		header += ' Given I connect to '+baseUrl + '\n';
		testText = header + commandsText;



	} else {
		testText = testCase.header + commandsText + testCase.footer;
	}

	return testText;
}

function defaultExtension() {
  return this.options.defaultExtension;
}
var configForm = '<description>Choose a wiki syntax:</description>'
			;
0
