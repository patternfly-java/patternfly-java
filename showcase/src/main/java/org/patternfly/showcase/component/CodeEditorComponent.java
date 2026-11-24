/*
 *  Copyright 2023 Red Hat
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
package org.patternfly.showcase.component;

import org.jboss.elemento.router.Route;
import org.patternfly.extension.codeeditor.CodeEditor;
import org.patternfly.extension.codeeditor.CodeEditorAction;
import org.patternfly.extension.codeeditor.Language;
import org.patternfly.extension.codeeditor.CodeEditorActions;
import org.patternfly.extension.codeeditor.CodeEditorHeader;
import org.patternfly.extension.codeeditor.CodeEditorHeaderMain;
import org.patternfly.extension.codeeditor.CodeEditorLink;
import org.patternfly.extension.codeeditor.CodeEditorLinks;
import org.patternfly.extension.codeeditor.CodeEditorTab;
import org.patternfly.extension.codeeditor.CodeEditorTabIcon;
import org.patternfly.extension.codeeditor.CodeEditorTabText;
import org.patternfly.showcase.Code;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.extension.codeeditor.CodeEditor.codeEditor;
import static org.patternfly.extension.codeeditor.CodeEditorAction.codeEditorAction;
import static org.patternfly.extension.codeeditor.CodeEditorAction.codeEditorCopyToClipboardAction;
import static org.patternfly.extension.codeeditor.CodeEditorActions.codeEditorActions;
import static org.patternfly.extension.codeeditor.CodeEditorHeader.codeEditorHeader;
import static org.patternfly.extension.codeeditor.CodeEditorHeaderMain.codeEditorHeaderMain;
import static org.patternfly.extension.codeeditor.CodeEditorLink.codeEditorViewShortcutsLink;
import static org.patternfly.extension.codeeditor.CodeEditorLinks.codeEditorLinks;
import static org.patternfly.extension.codeeditor.CodeEditorTab.codeEditorTab;
import static org.patternfly.icon.IconSets.fas.code;
import static org.patternfly.icon.IconSets.fas.download;
import static org.patternfly.icon.IconSets.fas.upload;
import static org.patternfly.showcase.ApiDoc.Type.component;
import static org.patternfly.showcase.ApiDoc.Type.subcomponent;
import static org.patternfly.showcase.Data.components;

@Route(value = "/components/code-editor", title = "Code editor")
public class CodeEditorComponent extends SnippetPage {

    private static final String JAVA_CODE = "" +
            "import java.util.List;\n" +
            "import java.util.stream.Collectors;\n" +
            "\n" +
            "public class Greeting {\n" +
            "\n" +
            "    private final String name;\n" +
            "    private final int count;\n" +
            "\n" +
            "    public Greeting(String name, int count) {\n" +
            "        this.name = name;\n" +
            "        this.count = count;\n" +
            "    }\n" +
            "\n" +
            "    /** Returns a personalized greeting repeated {@code count} times. */\n" +
            "    public List<String> greetings() {\n" +
            "        return java.util.stream.IntStream.range(0, count)\n" +
            "                .mapToObj(i -> \"Hello, \" + name + \"! (\" + (i + 1) + \"/\" + count + \")\")\n" +
            "                .collect(Collectors.toList());\n" +
            "    }\n" +
            "\n" +
            "    public static void main(String[] args) {\n" +
            "        Greeting greeting = new Greeting(\"World\", 3);\n" +
            "        greeting.greetings().forEach(System.out::println);\n" +
            "    }\n" +
            "}";

    private static final String JSON_CODE = "" +
            "{\n" +
            "  \"name\": \"@patternfly-java/codeeditor\",\n" +
            "  \"version\": \"0.15.2-SNAPSHOT\",\n" +
            "  \"type\": \"module\",\n" +
            "  \"license\": \"Apache-2.0\",\n" +
            "  \"dependencies\": {\n" +
            "    \"codemirror\": \"^6.0.0\",\n" +
            "    \"@codemirror/lang-java\": \"^6.0.0\",\n" +
            "    \"@codemirror/lang-json\": \"^6.0.0\"\n" +
            "  },\n" +
            "  \"devDependencies\": {\n" +
            "    \"vite\": \"catalog:\",\n" +
            "    \"vite-plus\": \"catalog:\"\n" +
            "  }\n" +
            "}";

    private static final String HTML_CODE = "" +
            "<!DOCTYPE html>\n" +
            "<html lang=\"en\">\n" +
            "<head>\n" +
            "    <meta charset=\"UTF-8\">\n" +
            "    <title>PatternFly Java</title>\n" +
            "    <link rel=\"stylesheet\" href=\"patternfly.css\">\n" +
            "</head>\n" +
            "<body>\n" +
            "    <div class=\"pf-v6-c-page\">\n" +
            "        <header class=\"pf-v6-c-masthead\">\n" +
            "            <span>PatternFly Java</span>\n" +
            "        </header>\n" +
            "        <main class=\"pf-v6-c-page__main\">\n" +
            "            <section class=\"pf-v6-c-page__main-section\">\n" +
            "                <h1>Welcome</h1>\n" +
            "                <p>Built with PatternFly and Java.</p>\n" +
            "            </section>\n" +
            "        </main>\n" +
            "    </div>\n" +
            "</body>\n" +
            "</html>";

    private static final String YAML_CODE = "" +
            "# WildFly datasource configuration\n" +
            "datasource:\n" +
            "  name: ExampleDS\n" +
            "  jndi-name: java:jboss/datasources/ExampleDS\n" +
            "  enabled: true\n" +
            "  connection-url: jdbc:h2:mem:test;DB_CLOSE_DELAY=-1\n" +
            "  driver-name: h2\n" +
            "  pool:\n" +
            "    min-pool-size: 5\n" +
            "    max-pool-size: 20\n" +
            "    prefill: true\n" +
            "  security:\n" +
            "    user-name: sa\n" +
            "    password: sa\n" +
            "  validation:\n" +
            "    valid-connection-checker: org.jboss.jca.adapters.jdbc.CheckValidConnectionSQL\n" +
            "    check-valid-connection-sql: \"SELECT 1\"\n" +
            "    validate-on-match: true";

    private static final String LOGFILE = "2026-11-24 08:05:53,265 INFO  [org.jboss.modules] (main) JBoss Modules version 2.1.6.Final\n" +
            "2026-11-24 08:05:53,556 INFO  [org.jboss.msc] (main) JBoss MSC version 1.5.6.Final\n" +
            "2026-11-24 08:05:53,616 INFO  [org.jboss.as] (MSC service thread 1-2) WFLYSRV0049: WildFly 42.0.0.Final (WildFly Core 34.0.0.Final) starting\n" +
            "2026-11-24 08:05:54,167 INFO  [org.wildfly.security] (Controller Boot Thread) ELY00001: WildFly Elytron version 2.9.4.Final\n" +
            "2026-11-24 08:05:54,653 INFO  [org.jboss.as.server] (Controller Boot Thread) WFLYSRV0039: Creating http management service using socket-binding (management-http)\n" +
            "2026-11-24 08:05:54,656 WARN  [org.jboss.as.server] (Controller Boot Thread) WFLYSRV0035: No security realm or http server authentication defined for http management service; all access will be unrestricted.\n" +
            "2026-11-24 08:05:54,664 INFO  [org.xnio] (MSC service thread 1-6) XNIO version 3.8.16.Final\n" +
            "2026-11-24 08:05:54,674 INFO  [org.xnio.nio] (MSC service thread 1-6) XNIO NIO Implementation Version 3.8.16.Final\n" +
            "2026-11-24 08:05:54,708 INFO  [org.jboss.remoting] (MSC service thread 1-7) JBoss Remoting version 5.0.32.Final\n" +
            "2026-11-24 08:05:54,723 INFO  [org.wildfly.extension.elytron.oidc._private] (ServerService Thread Pool -- 59) WFLYOIDC0001: Activating WildFly Elytron OIDC Subsystem\n" +
            "2026-11-24 08:05:54,734 INFO  [org.wildfly.extension.health] (ServerService Thread Pool -- 60) WFLYHEALTH0001: Activating Base Health Subsystem\n" +
            "2026-11-24 08:05:54,737 INFO  [org.jboss.as.clustering.jgroups] (ServerService Thread Pool -- 68) WFLYCLJG0001: Activating JGroups subsystem. JGroups version 5.5.8\n" +
            "2026-11-24 08:05:54,738 INFO  [org.wildfly.iiop.openjdk] (ServerService Thread Pool -- 61) WFLYIIOP0001: Activating IIOP Subsystem\n" +
            "2026-11-24 08:05:54,739 INFO  [org.jboss.as.clustering.infinispan] (ServerService Thread Pool -- 62) WFLYCLINF0001: Activating Infinispan subsystem.\n" +
            "2026-11-24 08:05:54,741 INFO  [org.jboss.as.connector.subsystems.datasources] (ServerService Thread Pool -- 50) WFLYJCA0004: Deploying JDBC-compliant driver class org.h2.Driver (version 2.4)\n" +
            "2026-11-24 08:05:54,744 INFO  [org.wildfly.extension.io] (ServerService Thread Pool -- 63) WFLYIO001: Worker 'default' has auto-configured to 10 IO threads with 80 max task threads based on your 5 available processors\n" +
            "2026-11-24 08:05:54,746 INFO  [org.jboss.as.jaxrs] (ServerService Thread Pool -- 65) WFLYRS0016: RESTEasy version 7.0.5.Final\n" +
            "2026-11-24 08:05:54,746 INFO  [org.wildfly.extension.microprofile.config.smallrye] (ServerService Thread Pool -- 75) WFLYCONF0001: Activating MicroProfile Config Subsystem\n" +
            "2026-11-24 08:05:54,746 INFO  [org.jboss.as.naming] (ServerService Thread Pool -- 78) WFLYNAM0001: Activating Naming Subsystem\n" +
            "2026-11-24 08:05:54,749 INFO  [org.jboss.as.jsf] (ServerService Thread Pool -- 71) WFLYJSF0007: Activated the following Jakarta Server Faces Implementations: [main]\n" +
            "2026-11-24 08:05:54,751 INFO  [org.wildfly.extension.microprofile.jwt.smallrye] (ServerService Thread Pool -- 76) WFLYJWT0001: Activating MicroProfile JWT Subsystem\n" +
            "2026-11-24 08:05:54,773 INFO  [org.wildfly.extension.metrics] (ServerService Thread Pool -- 74) WFLYMETRICS0001: Activating Base Metrics Subsystem\n" +
            "2026-11-24 08:05:54,776 INFO  [org.jboss.as.connector] (MSC service thread 1-3) WFLYJCA0009: Starting Jakarta Connectors Subsystem (WildFly/IronJacamar 3.0.22.Final)\n" +
            "2026-11-24 08:05:54,793 INFO  [org.jboss.as.connector.deployers.jdbc] (MSC service thread 1-8) WFLYJCA0018: Started Driver service with driver-name = h2\n" +
            "2026-11-24 08:05:54,806 INFO  [org.jboss.as.mail.extension] (MSC service thread 1-2) WFLYMAIL0001: Bound mail session [java:jboss/mail/Default]\n" +
            "2026-11-24 08:05:54,810 INFO  [org.jboss.as.naming] (MSC service thread 1-4) WFLYNAM0003: Starting Naming Service\n" +
            "2026-11-24 08:05:54,827 WARN  [org.jboss.as.txn] (ServerService Thread Pool -- 86) WFLYTX0013: The node-identifier attribute on the /subsystem=transactions is set to the default value. This is a danger for environments running multiple servers. Please make sure the attribute value is unique.\n" +
            "2026-11-24 08:05:54,835 INFO  [org.jboss.as.webservices] (ServerService Thread Pool -- 88) WFLYWS0002: Activating WebServices Extension\n" +
            "2026-11-24 08:05:54,916 WARN  [org.wildfly.extension.elytron] (MSC service thread 1-3) WFLYELY00023: KeyStore file '/opt/jboss/wildfly/standalone/configuration/application.keystore' does not exist. Used blank.\n" +
            "2026-11-24 08:05:54,917 INFO  [org.jboss.as.ejb3] (MSC service thread 1-4) WFLYEJB0481: Strict pool slsb-strict-max-pool is using a max instance size of 80 (per class), which is derived from thread worker pool sizing.\n" +
            "2026-11-24 08:05:54,919 INFO  [org.wildfly.extension.undertow] (MSC service thread 1-7) WFLYUT0003: Undertow 2.4.4.Final starting\n" +
            "2026-11-24 08:05:54,919 INFO  [org.jboss.as.ejb3] (MSC service thread 1-2) WFLYEJB0482: Strict pool mdb-strict-max-pool is using a max instance size of 20 (per class), which is derived from the number of CPUs on this host.\n" +
            "2026-11-24 08:05:54,930 INFO  [org.wildfly.extension.undertow] (ServerService Thread Pool -- 87) WFLYUT0112: The value 'require-host-http11' attribute in the '/subsystem=undertow/server=default-server/http-listener=default' resource is 'false', which will be ignored. The server now always enforces the RFC 9112 requirement that HTTP/1.1 request messages include a Host header.\n" +
            "2026-11-24 08:05:54,942 WARN  [org.wildfly.extension.elytron] (MSC service thread 1-3) WFLYELY01084: KeyStore /opt/jboss/wildfly/standalone/configuration/application.keystore not found, it will be auto-generated on first use with a self-signed certificate for host localhost\n" +
            "2026-11-24 08:05:54,945 INFO  [org.wildfly.extension.undertow] (ServerService Thread Pool -- 87) WFLYUT0112: The value 'require-host-http11' attribute in the '/subsystem=undertow/server=default-server/https-listener=https' resource is 'false', which will be ignored. The server now always enforces the RFC 9112 requirement that HTTP/1.1 request messages include a Host header.\n" +
            "2026-11-24 08:05:54,952 WARN  [org.jboss.as.remoting] (MSC service thread 1-7) ****** All authentication is ANONYMOUS for org.jboss.as.remoting.RemotingHttpUpgradeService\n" +
            "2026-11-24 08:05:55,034 INFO  [org.wildfly.extension.undertow] (ServerService Thread Pool -- 87) WFLYUT0014: Creating file handler for path '/opt/jboss/wildfly/welcome-content' with options [directory-listing: 'false', follow-symlink: 'false', case-sensitive: 'true', safe-symlink-paths: '[]']\n" +
            "2026-11-24 08:05:55,066 ERROR [org.wildfly.boom] (Evil thread 666) Random error - and there's nothing you can do about it!\n" +
            "2026-11-24 08:05:55,142 INFO  [org.wildfly.extension.undertow] (MSC service thread 1-2) WFLYUT0012: Started server default-server.\n" +
            "2026-11-24 08:05:55,145 INFO  [org.wildfly.extension.undertow] (MSC service thread 1-8) Queuing requests.\n" +
            "2026-11-24 08:05:55,148 INFO  [org.wildfly.extension.undertow] (MSC service thread 1-8) WFLYUT0018: Host default-host starting\n" +
            "2026-11-24 08:05:55,151 INFO  [org.wildfly.extension.undertow] (MSC service thread 1-2) WFLYUT0006: Undertow HTTP listener default listening on 0.0.0.0:8080\n" +
            "2026-11-24 08:05:55,162 INFO  [org.jboss.modcluster] (ServerService Thread Pool -- 85) MODCLUSTER000001: Initializing mod_cluster version 2.1.1.Final\n" +
            "2026-11-24 08:05:55,171 INFO  [org.jboss.modcluster] (ServerService Thread Pool -- 85) MODCLUSTER000032: Listening to proxy advertisements on /224.0.1.105:23364\n" +
            "2026-11-24 08:05:55,180 INFO  [org.wildfly.extension.undertow] (MSC service thread 1-3) WFLYUT0006: Undertow HTTPS listener https listening on 0.0.0.0:8443\n" +
            "2026-11-24 08:05:55,202 INFO  [org.wildfly.iiop.openjdk] (MSC service thread 1-5) WFLYIIOP0009: CORBA ORB Service started\n" +
            "2026-11-24 08:05:55,234 INFO  [org.jboss.as.connector.subsystems.datasources] (MSC service thread 1-2) WFLYJCA0001: Bound data source [java:jboss/datasources/ExampleDS]\n" +
            "2026-11-24 08:05:55,267 INFO  [org.jboss.as.server.deployment.scanner] (MSC service thread 1-2) WFLYDS0013: Started FileSystemDeploymentService for directory /opt/jboss/wildfly/standalone/deployments\n" +
            "2026-11-24 08:05:55,275 WARN  [org.wildfly.clustering.jgroups.config] (ServerService Thread Pool -- 98) WFLYCLJG0040: Configuration of channel ee does not guarantee message confidentiality between cluster members. Consider encrypting intra-cluster communication by configuring the channel transport with TLS or by adding the ASYM_ENCRYPT or SYM_ENCRYPT protocol to the protocol stack.\n" +
            "2026-11-24 08:05:55,276 WARN  [org.wildfly.clustering.jgroups.config] (ServerService Thread Pool -- 98) WFLYCLJG0039: Configuration of channel ee does not require member authentication. Consider blocking untrusted cluster members by requiring TLS client authentication on the channel transport or by adding the AUTH protocol to the protocol stack.\n" +
            "2026-11-24 08:05:55,299 INFO  [org.jboss.ws.common.management] (MSC service thread 1-5) JBWS022052: Starting JBossWS 8.0.0.Final (Apache CXF 4.1.9) \n" +
            "2026-11-24 08:05:55,326 INFO  [org.jboss.as.clustering.jgroups] (ServerService Thread Pool -- 91) WFLYCLJG0032: Connecting 'ee' channel. '2e36ad47957b' joining cluster 'ejb' via /127.0.0.1:55200\n" +
            "2026-11-24 08:05:55,328 INFO  [org.jgroups.JChannel] (ServerService Thread Pool -- 91) local_addr: 2e36ad47957b(v=16.2.3), name: 2e36ad47957b\n" +
            "2026-11-24 08:05:55,330 WARN  [org.jgroups.protocols.UDP] (ServerService Thread Pool -- 91) JGRP000015: the send buffer of socket ManagedMulticastSocketBinding was set to 1MB, but the OS only allocated 212.99KB\n" +
            "2026-11-24 08:05:55,330 WARN  [org.jgroups.protocols.UDP] (ServerService Thread Pool -- 91) JGRP000015: the receive buffer of socket ManagedMulticastSocketBinding was set to 20MB, but the OS only allocated 212.99KB\n" +
            "2026-11-24 08:05:55,330 WARN  [org.jgroups.protocols.UDP] (ServerService Thread Pool -- 91) JGRP000015: the send buffer of socket ManagedMulticastSocketBinding was set to 1MB, but the OS only allocated 212.99KB\n" +
            "2026-11-24 08:05:55,330 WARN  [org.jgroups.protocols.UDP] (ServerService Thread Pool -- 91) JGRP000015: the receive buffer of socket ManagedMulticastSocketBinding was set to 25MB, but the OS only allocated 212.99KB\n" +
            "2026-11-24 08:05:55,335 INFO  [org.jgroups.protocols.FD_SOCK2] (ServerService Thread Pool -- 91) server listening on /127.0.0.1:7602\n" +
            "2026-11-24 08:05:57,340 INFO  [org.jgroups.protocols.pbcast.GMS] (ServerService Thread Pool -- 91) 2e36ad47957b(v=16.2.3): no members discovered after 2.00s: creating cluster as coordinator\n" +
            "2026-11-24 08:05:57,358 INFO  [org.jboss.as.clustering.jgroups] (ServerService Thread Pool -- 91) WFLYCLJG0033: Connected 'ee' channel. '2e36ad47957b' joined cluster 'ejb' with view: [2e36ad47957b(v=16.2.3)|0] (1) [2e36ad47957b(v=16.2.3)]\n" +
            "2026-11-24 08:05:57,584 INFO  [org.wildfly.extension.messaging-activemq] (MSC service thread 1-4) WFLYMSGAMQ0075: AIO wasn't located on this platform, it will fall back to using pure Java NIO. Your platform is Linux, install LibAIO to enable the AIO journal and achieve optimal performance.\n" +
            "2026-11-24 08:05:57,630 INFO  [org.infinispan.CONTAINER] (ServerService Thread Pool -- 85) ISPN000974: Virtual threads support: unavailable\n" +
            "2026-11-24 08:05:57,639 INFO  [org.apache.activemq.artemis.core.server] (ServerService Thread Pool -- 94) AMQ221000: Primary message broker is starting with configuration Broker Configuration (clustered=true,journalDirectory=/opt/jboss/wildfly/standalone/data/activemq/journal,bindingsDirectory=/opt/jboss/wildfly/standalone/data/activemq/bindings,largeMessagesDirectory=/opt/jboss/wildfly/standalone/data/activemq/largemessages,pagingDirectory=/opt/jboss/wildfly/standalone/data/activemq/paging)\n" +
            "2026-11-24 08:05:57,661 INFO  [org.apache.activemq.artemis.core.server] (ServerService Thread Pool -- 94) AMQ221013: Using NIO Journal\n" +
            "2026-11-24 08:05:57,784 INFO  [org.apache.activemq.artemis.core.server] (ServerService Thread Pool -- 94) AMQ221043: Protocol module found: [artemis-server]. Adding protocol support for: CORE\n" +
            "2026-11-24 08:05:57,785 INFO  [org.apache.activemq.artemis.core.server] (ServerService Thread Pool -- 94) AMQ221043: Protocol module found: [artemis-amqp-protocol]. Adding protocol support for: AMQP\n" +
            "2026-11-24 08:05:57,785 INFO  [org.apache.activemq.artemis.core.server] (ServerService Thread Pool -- 94) AMQ221043: Protocol module found: [artemis-hornetq-protocol]. Adding protocol support for: HORNETQ\n" +
            "2026-11-24 08:05:57,785 INFO  [org.apache.activemq.artemis.core.server] (ServerService Thread Pool -- 94) AMQ221043: Protocol module found: [artemis-stomp-protocol]. Adding protocol support for: STOMP\n" +
            "2026-11-24 08:05:57,801 INFO  [org.apache.activemq.artemis.core.server] (ServerService Thread Pool -- 94) AMQ221034: Waiting indefinitely to obtain primary lock\n" +
            "2026-11-24 08:05:57,801 INFO  [org.apache.activemq.artemis.core.server] (ServerService Thread Pool -- 94) AMQ221035: Primary Server Obtained primary lock\n" +
            "2026-11-24 08:05:57,859 INFO  [org.apache.activemq.artemis.core.server] (ServerService Thread Pool -- 94) AMQ221003: Deploying ANYCAST queue jms.queue.ExpiryQueue on address jms.queue.ExpiryQueue\n" +
            "2026-11-24 08:05:57,924 INFO  [org.apache.activemq.artemis.core.server] (ServerService Thread Pool -- 94) AMQ221003: Deploying ANYCAST queue jms.queue.DLQ on address jms.queue.DLQ\n" +
            "2026-11-24 08:05:57,926 INFO  [org.infinispan.CONTAINER] (ServerService Thread Pool -- 85) ISPN000556: Starting user marshaller 'org.wildfly.clustering.cache.infinispan.marshalling.UserMarshaller'\n" +
            "2026-11-24 08:05:57,927 INFO  [org.infinispan.CONTAINER] (ServerService Thread Pool -- 96) ISPN000556: Starting user marshaller 'org.wildfly.clustering.cache.infinispan.marshalling.UserMarshaller'\n" +
            "2026-11-24 08:05:57,938 INFO  [org.infinispan.CONTAINER] (ServerService Thread Pool -- 98) ISPN000556: Starting user marshaller 'org.wildfly.clustering.cache.infinispan.marshalling.UserMarshaller'\n" +
            "2026-11-24 08:05:57,939 INFO  [org.wildfly.extension.messaging-activemq] (MSC service thread 1-5) WFLYMSGAMQ0016: Registered HTTP upgrade for activemq-remoting protocol handled by http-acceptor acceptor\n" +
            "2026-11-24 08:05:57,940 INFO  [org.wildfly.extension.messaging-activemq] (MSC service thread 1-4) WFLYMSGAMQ0016: Registered HTTP upgrade for activemq-remoting protocol handled by http-acceptor-throughput acceptor\n" +
            "2026-11-24 08:05:57,940 INFO  [org.wildfly.extension.messaging-activemq] (MSC service thread 1-7) WFLYMSGAMQ0016: Registered HTTP upgrade for activemq-remoting protocol handled by http-acceptor acceptor\n" +
            "2026-11-24 08:05:57,940 INFO  [org.wildfly.extension.messaging-activemq] (MSC service thread 1-6) WFLYMSGAMQ0016: Registered HTTP upgrade for activemq-remoting protocol handled by http-acceptor-throughput acceptor\n" +
            "2026-11-24 08:05:57,974 INFO  [org.infinispan.CONTAINER] (ServerService Thread Pool -- 85) ISPN000390: Persisted state, version=16.2.3 timestamp=2026-11-24T08:05:57.973899827Z\n" +
            "2026-11-24 08:05:57,975 INFO  [org.infinispan.CONTAINER] (ServerService Thread Pool -- 98) ISPN000390: Persisted state, version=16.2.3 timestamp=2026-11-24T08:05:57.974826369Z\n" +
            "2026-11-24 08:05:57,976 INFO  [org.infinispan.CONTAINER] (ServerService Thread Pool -- 96) ISPN000390: Persisted state, version=16.2.3 timestamp=2026-11-24T08:05:57.973431743Z\n" +
            "2026-11-24 08:05:58,034 INFO  [org.infinispan.CONTAINER] (ServerService Thread Pool -- 91) ISPN000556: Starting user marshaller 'org.wildfly.clustering.cache.infinispan.marshalling.UserMarshaller'\n" +
            "2026-11-24 08:05:58,038 INFO  [org.infinispan.CONTAINER] (ServerService Thread Pool -- 91) ISPN000390: Persisted state, version=16.2.3 timestamp=2026-11-24T08:05:58.038753829Z\n" +
            "2026-11-24 08:05:58,090 INFO  [org.apache.activemq.artemis.core.server] (ServerService Thread Pool -- 94) AMQ221007: Server is now active\n" +
            "2026-11-24 08:05:58,090 INFO  [org.apache.activemq.artemis.core.server] (ServerService Thread Pool -- 94) AMQ221001: Apache Artemis Message Broker version 2.57.0 [default, nodeID=e125de78-e7dd-11f1-afc5-f6b7ee287ef9] \n" +
            "2026-11-24 08:05:58,093 WARN  [org.apache.activemq.artemis.jms.server] (ServerService Thread Pool -- 93) AMQ122005: Invalid \"host\" value \"0.0.0.0\" detected for \"http-connector\" connector. Switching to \"2e36ad47957b\". If this new address is incorrect please manually configure the connector to use the proper one.\n" +
            "2026-11-24 08:05:58,099 INFO  [org.wildfly.extension.messaging-activemq] (ServerService Thread Pool -- 93) WFLYMSGAMQ0002: Bound messaging object to jndi name java:jboss/exported/jms/RemoteConnectionFactory\n" +
            "2026-11-24 08:05:58,104 INFO  [org.wildfly.extension.messaging-activemq] (ServerService Thread Pool -- 95) WFLYMSGAMQ0002: Bound messaging object to jndi name java:/ConnectionFactory\n" +
            "2026-11-24 08:05:58,145 INFO  [org.jboss.as.connector.deployment] (MSC service thread 1-5) WFLYJCA0007: Registered connection factory java:/JmsXA\n" +
            "2026-11-24 08:05:58,174 INFO  [org.apache.activemq.artemis.ra.ActiveMQRALogger] (MSC service thread 1-5) AMQ151007: Resource adaptor started\n" +
            "2026-11-24 08:05:58,174 INFO  [org.jboss.as.connector.services.resourceadapters.ResourceAdapterActivatorService$ResourceAdapterActivator] (MSC service thread 1-5) IJ020002: Deployed: file://RaActivatoractivemq-ra\n" +
            "2026-11-24 08:05:58,177 INFO  [org.jboss.as.connector.deployment] (MSC service thread 1-7) WFLYJCA0002: Bound Jakarta Connectors ConnectionFactory [java:/JmsXA]\n" +
            "2026-11-24 08:05:58,177 INFO  [org.jboss.as.connector.deployment] (MSC service thread 1-8) WFLYJCA0118: Binding connection factory named java:/JmsXA to alias java:jboss/DefaultJMSConnectionFactory\n" +
            "2026-11-24 08:05:58,319 INFO  [org.jboss.as.server] (Controller Boot Thread) WFLYSRV0212: Resuming server\n" +
            "2026-11-24 08:05:58,323 INFO  [org.jboss.as] (Controller Boot Thread) WFLYSRV0060: Http management interface listening on http://0.0.0.0:9990/management\n" +
            "2026-11-24 08:05:58,323 INFO  [org.jboss.as] (Controller Boot Thread) WFLYSRV0051: Admin console listening on http://0.0.0.0:9990\n" +
            "2026-11-24 08:05:58,324 INFO  [org.jboss.as] (Controller Boot Thread) WFLYSRV0025: WildFly 42.0.0.Final (WildFly Core 34.0.0.Final) started in 5300ms - Started 463 of 766 services (562 services are lazy, passive or on-demand) - Server configuration file in use: standalone-full-ha-no-auth.xml - Minimum feature stability level: community";

    public CodeEditorComponent() {
        super(components.get("code-editor"));

        startExamples();
        addSnippet(new Snippet("code-editor-basic", "Basic",
                Code.code("code-editor-basic"), () ->
                // @code-start:code-editor-basic
                div()
                        .add(codeEditor()
                                .addHeader(codeEditorHeader()
                                        .addActions(codeEditorActions()
                                                .addAction(codeEditorCopyToClipboardAction())
                                                .addAction(codeEditorAction(download()))
                                                .addAction(codeEditorAction(upload())))
                                        .addTab(codeEditorTab(code(), "Java")))
                                .language(Language.JAVA)
                                .code(JAVA_CODE))
                        .element()
                // @code-end:code-editor-basic
        ));

        addSnippet(new Snippet("code-editor-readonly", "Readonly",
                Code.code("code-editor-readonly"), () ->
                // @code-start:code-editor-readonly
                div()
                        .add(codeEditor()
                                .readonly()
                                .addHeader(codeEditorHeader()
                                        .addActions(codeEditorActions()
                                                .addAction(codeEditorCopyToClipboardAction())
                                                .addAction(codeEditorAction(download()))
                                                .addAction(codeEditorAction(button().icon(upload()).control().disabled())))
                                        .addTab(codeEditorTab(code(), "Java")))
                                .language(Language.JAVA)
                                .code(JAVA_CODE))
                        .element()
                // @code-end:code-editor-readonly
        ));

        addSnippet(new Snippet("code-editor-no-actions", "Without actions",
                Code.code("code-editor-no-actions"), () ->
                // @code-start:code-editor-no-actions
                div()
                        .add(codeEditor()
                                .addHeader(codeEditorHeader()
                                        .addTab(codeEditorTab(code(), "Java")))
                                .language(Language.JAVA)
                                .code(JAVA_CODE))
                        .element()
                // @code-end:code-editor-no-actions
        ));

        addSnippet(new Snippet("code-editor-no-tab", "Without tab",
                Code.code("code-editor-no-tab"), () ->
                // @code-start:code-editor-no-tab
                div()
                        .add(codeEditor()
                                .addHeader(codeEditorHeader()
                                        .addActions(codeEditorActions()
                                                .addAction(codeEditorCopyToClipboardAction())
                                                .addAction(codeEditorAction(download()))
                                                .addAction(codeEditorAction(button().icon(upload()).control().disabled()))))
                                .language(Language.JAVA)
                                .code(JAVA_CODE))
                        .element()
                // @code-end:code-editor-no-tab
        ));

        addSnippet(new Snippet("code-editor-no-actions-no-tab", "Without actions and tab",
                Code.code("code-editor-no-actions-no-tab"), () ->
                // @code-start:code-editor-no-actions-no-tab
                div()
                        .add(codeEditor()
                                .language(Language.JAVA)
                                .code(JAVA_CODE))
                        .element()
                // @code-end:code-editor-no-actions-no-tab
        ));

        addSnippet(new Snippet("code-editor-header-content", "With optional header content and keyboard shortcuts",
                Code.code("code-editor-header-content"), () ->
                // @code-start:code-editor-header-content
                div()
                        .add(codeEditor()
                                .addHeader(codeEditorHeader()
                                        .addActions(codeEditorActions()
                                                .addAction(codeEditorCopyToClipboardAction())
                                                .addAction(codeEditorAction(download()))
                                                .addAction(codeEditorAction(upload())))
                                        .addMain(codeEditorHeaderMain()
                                                .text("Header main content"))
                                        .addLinks(codeEditorLinks()
                                                .addLink(codeEditorViewShortcutsLink()))
                                        .addTab(codeEditorTab(code(), "Java")))
                                .language(Language.JAVA)
                                .code(JAVA_CODE))
                        .element()
                // @code-end:code-editor-header-content
        ));

        addSnippet(new Snippet("code-editor-json", "JSON",
                Code.code("code-editor-json"), () ->
                // @code-start:code-editor-json
                div()
                        .add(codeEditor()
                                .addHeader(codeEditorHeader()
                                        .addActions(codeEditorActions()
                                                .addAction(codeEditorCopyToClipboardAction()))
                                        .addTab(codeEditorTab(code(), "JSON")))
                                .language(Language.JSON)
                                .code(JSON_CODE))
                        .element()
                // @code-end:code-editor-json
        ));

        addSnippet(new Snippet("code-editor-html", "HTML",
                Code.code("code-editor-html"), () ->
                // @code-start:code-editor-html
                div()
                        .add(codeEditor()
                                .addHeader(codeEditorHeader()
                                        .addActions(codeEditorActions()
                                                .addAction(codeEditorCopyToClipboardAction()))
                                        .addTab(codeEditorTab(code(), "HTML")))
                                .language(Language.HTML)
                                .code(HTML_CODE))
                        .element()
                // @code-end:code-editor-html
        ));

        addSnippet(new Snippet("code-editor-yaml", "YAML",
                Code.code("code-editor-yaml"), () ->
                // @code-start:code-editor-yaml
                div()
                        .add(codeEditor()
                                .addHeader(codeEditorHeader()
                                        .addActions(codeEditorActions()
                                                .addAction(codeEditorCopyToClipboardAction()))
                                        .addTab(codeEditorTab(code(), "YAML")))
                                .language(Language.YAML)
                                .code(YAML_CODE))
                        .element()
                // @code-end:code-editor-yaml
        ));

        addSnippet(new Snippet("code-editor-logfile", "Logfile (readonly)",
                Code.code("code-editor-logfile"), () ->
                // @code-start:code-editor-logfile
                div()
                        .add(codeEditor().readonly()
                                .height("20lh")
                                .addHeader(codeEditorHeader()
                                        .addActions(codeEditorActions()
                                                .addAction(codeEditorCopyToClipboardAction()))
                                        .addTab(codeEditorTab(code(), "Logfile")))
                                .language(Language.LOGFILE)
                                .code(LOGFILE))
                        .element()
                // @code-end:code-editor-logfile
        ));

        startApiDocs(CodeEditor.class);
        addApiDoc(CodeEditor.class, component);
        addApiDoc(CodeEditorAction.class, subcomponent);
        addApiDoc(CodeEditorActions.class, subcomponent);
        addApiDoc(CodeEditorHeader.class, subcomponent);
        addApiDoc(CodeEditorHeaderMain.class, subcomponent);
        addApiDoc(CodeEditorLink.class, subcomponent);
        addApiDoc(CodeEditorLinks.class, subcomponent);
        addApiDoc(CodeEditorTab.class, subcomponent);
        addApiDoc(CodeEditorTabIcon.class, subcomponent);
        addApiDoc(CodeEditorTabText.class, subcomponent);
    }
}
