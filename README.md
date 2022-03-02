# Winston Library & ELK Stack Guide

## Winston Library Installation and Logger Creation
* Install Winston library in your node app using the command:
  * _npm install --save winston_
* The purpose of installing Winston library is that you have to make your logger like I created which can be located in ___util___ folder named ___logger.js___
* Please check the following links for a detailed description of anything regarding the winston library.
  * https://www.npmjs.com/package/winston
  * https://github.com/winstonjs/winston
* Tutorial’s link:
  * https://www.youtube.com/watch?v=cWi7TAyVoZo&t=741s&ab_channel=ProgrammingwithBasar 

## ELK Local Setup and Guide
* Please watch these two links for ELK setup and how to pass and visualize logs:
  * https://www.youtube.com/watch?v=8iXZTS7f_hY&ab_channel=ProgrammingKnowledge
  * https://www.youtube.com/watch?v=_kqunm8w7GI&ab_channel=ProgrammingKnowledge
* Note:
  * At this point, elk must be added to your environment variables to run the below commands.
  * It doesn’t matter whether you run your cmd with admin rights or not, it works.
* To check if your logstash.conf file is correct or not, use this command:
  * _logstash -f_ <_absolute-path-of-your-conf-file> --config.test_and_exit_
* To run your logstash.conf file on edit, use this command:
  * _logstash -f_ <_absolute-path-of-your-conf-file>
* To autorun your logstash.conf file on edit, use this command:
  * _logstash -f_ <_absolute-path-of-your-conf-file> --config.reload.automatic_
* Find all logstash commands here:
  * https://www.elastic.co/guide/en/logstash/current/running-logstash-command-line.html#running-logstash-command-line

## Access Index and Observe Logs using Kibana
* Once you have successfully passed your data to elasticsearch using logstash, you can access your index (uniquely identifier name to access logs on Kibana).
* On Kibana server, access these from the left-side menu;
* To create an index pattern:
  * _(Management) Stack Management &#8594; (Kibana) Index Patterns_
* To view your logs:
  * _(Management) Dev Tools_
  * __Command:__ _GET_ /<_your index>/_search_
* To view specific fields or search something within logs:
  * _(Analytics) Discover_
  * Update date and time from top-left side and __DON’T__ forget to click on the update button at this moment. You need to update each time you change the date and time.
  * Select one or more fields from available fields by clicking on the __+__ icon next to each field
  * Search some text in the search bar and update again and observe the logs
* To create any kind of graph/chart/table of your logs:
  * _(Analytics) Visualize Library &#8594; Aggregation Based_
  * And, select your desired graph/chart/table and visualize your logs
 
