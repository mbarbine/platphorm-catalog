# mbarbine__xsociety

Social Buttons for Bootstrap

## Metadata

- ID: `github-recent__mbarbine__xsociety`
- Path: `/Users/bwm.barbinewarnermichael/Documents/github/repositories/github-recent/mbarbine__xsociety`
- Remote: `git@github.com:mbarbine/xsociety.git`
- Primary language: JavaScript
- Frameworks: none detected
- Maturity: deprecated
- Confidence: high

## Capabilities

### Workflow Runner

- ID: `automation.workflow-runner`
- Type: automation
- Maturity: deprecated
- Confidence: medium
- Reuse: partial, difficulty medium
- Source paths: `html/components/bootstrap/Gruntfile.js`, `html/components/bootstrap/package.json`
- Tests: 30
- LLMs context: none detected

Source evidence indicates jobs, workflows, queues, cron tasks, or automation runs.

### Data Import and Export

- ID: `data.import-export`
- Type: data-export
- Maturity: deprecated
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `APKs/AndroidAgentBAK/build.xml`, `html/components/bootstrap/package.json`, `html/components/flot/package.json`, `html/components/holderjs/package.json`, `html/components/metisMenu/package.json`, `html/components/morrisjs/package.json`
- Tests: 30
- LLMs context: none detected

Source evidence indicates import, export, CSV, JSON, XML, or structured data transfer behavior.

### Database Schema Management

- ID: `database.schema-management`
- Type: database
- Maturity: deprecated
- Confidence: high
- Reuse: partial, difficulty high
- Source paths: `html/components/bootstrap/package.json`, `html/components/flot/package.json`, `html/components/holderjs/package.json`, `html/components/metisMenu/package.json`, `html/components/morrisjs/package.json`, `xsociety_db_schema.sql`
- Tests: 30
- LLMs context: none detected

Repository includes database schemas, migrations, or database framework dependencies.

### Deployment and Project Automation

- ID: `deployment.project-automation`
- Type: deployment
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `docker-compose.yml`
- Tests: 30
- LLMs context: none detected

Repository includes CI workflows, deployment config, or containerization files.

### Trace and Logging

- ID: `observability.trace-logging`
- Type: observability
- Maturity: deprecated
- Confidence: low
- Reuse: partial, difficulty unknown
- Source paths: `pipeline/cookbooks/rsyslog/README.md`
- Tests: 30
- LLMs context: none detected

Source evidence indicates trace, span, logging, monitoring, or OpenTelemetry behavior.

### Environment Configuration

- ID: `security.env-configuration`
- Type: security
- Maturity: deprecated
- Confidence: medium
- Reuse: pattern_only, difficulty medium
- Source paths: `APKs/AndroidAgentBAK/build.xml`, `html/components/bootstrap/Gruntfile.js`, `html/components/mocha/mocha.js`
- Tests: 30
- LLMs context: none detected

Repository references environment variables; secret-like names are cataloged without values.

### Automated Test Suite

- ID: `testing.automated-tests`
- Type: testing
- Maturity: deprecated
- Confidence: high
- Reuse: pattern_only, difficulty medium
- Source paths: `html/components/morrisjs/spec/viz/examples.js`, `html/components/morrisjs/spec/viz/visual_specs.js`, `pipeline/cookbooks/apache2/files/default/tests/minitest/default_test.rb`, `pipeline/cookbooks/apache2/files/default/tests/minitest/god_monitor_test.rb`, `pipeline/cookbooks/apache2/files/default/tests/minitest/mod_apreq2_test.rb`, `pipeline/cookbooks/apache2/files/default/tests/minitest/mod_auth_cas_test.rb`, `pipeline/cookbooks/apache2/files/default/tests/minitest/mod_auth_openid_test.rb`, `pipeline/cookbooks/apache2/files/default/tests/minitest/mod_cgi_test.rb`, `pipeline/cookbooks/apache2/files/default/tests/minitest/mod_dav_svn_test.rb`, `pipeline/cookbooks/apache2/files/default/tests/minitest/mod_include_test.rb`, `pipeline/cookbooks/apache2/files/default/tests/minitest/mod_perl_test.rb`, `pipeline/cookbooks/apache2/files/default/tests/minitest/mod_php5_test.rb`, `pipeline/cookbooks/apache2/files/default/tests/minitest/mod_python_test.rb`, `pipeline/cookbooks/apache2/files/default/tests/minitest/mod_ssl_test.rb`, `pipeline/cookbooks/apache2/test/features/step_definitions/svn_steps.rb`, `pipeline/cookbooks/apache2/test/features/step_definitions/webserver_steps.rb`, `pipeline/cookbooks/apache2/test/features/support/env.rb`, `pipeline/cookbooks/apache2/test/features/support/svn_helpers.rb`, `pipeline/cookbooks/apache2/test/features/support/web_helpers.rb`, `pipeline/cookbooks/apache2/test/kitchen/cookbooks/apache2_test/attributes/default.rb`, `pipeline/cookbooks/apache2/test/kitchen/cookbooks/apache2_test/files/default/tests/minitest/modules_test.rb`, `pipeline/cookbooks/apache2/test/kitchen/cookbooks/apache2_test/files/default/tests/minitest/support/helpers.rb`, `pipeline/cookbooks/apache2/test/kitchen/cookbooks/apache2_test/metadata.rb`, `pipeline/cookbooks/apache2/test/kitchen/cookbooks/apache2_test/recipes/basic_web_app.rb`, `pipeline/cookbooks/apache2/test/kitchen/cookbooks/apache2_test/recipes/default.rb`, `pipeline/cookbooks/apache2/test/kitchen/cookbooks/apache2_test/recipes/god_monitor.rb`, `pipeline/cookbooks/apache2/test/kitchen/cookbooks/apache2_test/recipes/mod_auth_basic.rb`, `pipeline/cookbooks/apache2/test/kitchen/cookbooks/apache2_test/recipes/mod_auth_digest.rb`, `pipeline/cookbooks/apache2/test/kitchen/cookbooks/apache2_test/recipes/mod_auth_openid.rb`, `pipeline/cookbooks/apache2/test/kitchen/cookbooks/apache2_test/recipes/mod_authnz_ldap.rb`
- Tests: 30
- LLMs context: none detected

Repository includes automated test files.

## Repository Risks

- [critical] Secret-like literal values were detected in source. Samples are redacted in scan output. Evidence: `pipeline/cookbooks/brakeman_python/files/default/brakeman_python/ConfigConsts.py`, `pipeline/Packer/xsociety_aws.json`, `pipeline/Packer/xsociety.json`
- [medium] Unsafe-code or SSRF-review patterns were detected and need human review. Evidence: `APKs/AndroidAgentBAK/src/com/bulbsecurity/framework/Checkin.java`, `APKs/AndroidAgentBAK/src/com/bulbsecurity/framework/Download.java`, `APKs/AndroidAgentBAK/src/com/bulbsecurity/framework/Execute.java`, `html/components/bootstrap/grunt/bs-lessdoc-parser.js`, `html/components/datatables-plugins/filtering/row-based/TableTools.ShowSelectedOnly.js`, `html/components/datatables-plugins/filtering/type-based/html.js`, `html/components/datatables-plugins/pagination/input.js`, `html/components/datatables-plugins/pagination/select.js`, `html/components/datatables/media/js/jquery.dataTables.js`, `html/components/datatables/media/js/jquery.dataTables.min.js`, `html/components/datatables/media/js/jquery.js`, `html/components/datetimepicker/datetimepicker_css.js`, `html/components/flot.tooltip/js/excanvas.min.js`, `html/components/flot.tooltip/js/jquery.flot.js`, `html/components/flot/examples/axes-time-zones/date.js`, `html/components/flot/excanvas.js`, `html/components/flot/excanvas.min.js`, `html/components/flot/jquery.colorhelpers.js`, `html/components/flot/jquery.flot.js`, `html/components/flot/jquery.js`, `html/components/holderjs/holder.js`, `html/components/holderjs/src/holder.js`, `html/components/jquery/src/ajax.js`, `html/components/jquery/src/core/init.js`, `html/components/jquery/src/core/parseHTML.js`, `html/components/jquery/src/css.js`, `html/components/jquery/src/css/support.js`, `html/components/jquery/src/effects.js`, `html/components/jquery/src/event.js`, `html/components/jquery/src/manipulation.js`, `html/components/jquery/src/manipulation/support.js`, `html/components/metisMenu/src/metisMenu.js`, `html/components/mocha/mocha.js`, `html/components/morrisjs/examples/_template.html`, `html/components/morrisjs/examples/lib/example.js`, `html/components/raphael/dev/require.js`, `html/components/raphael/raphael-min.js`, `html/components/raphael/raphael.js`
- [medium] Secret-like environment variable names are referenced. Evidence: `html/components/bootstrap/Gruntfile.js`

## Gaps

- CI workflows not detected
- LLMs context files not detected
- framework route files not detected
