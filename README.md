<MainGrid>

<HeaderTitle>
  
# Java REST API <br/> on the AWS cloud

<TitleAction href="https://github.com/stefanosAgelastos/personalRest" label="Go to github repo" />
</HeaderTitle>


<InfoGrid>

<InfoPaper>
  
## Description

This is a REST API, made using the Spring Boot 2.0 framework. This project was coded as an exam project for 5th semester's **elective course: Spring Boot and DevOps**. For this project I got an excellent evaluation during the exam.

</InfoPaper>

<InfoPaper>
<MyChip label="Back-end Development"/>
<MyChip label="Java"/>
<MyChip label="Spring Boot 2.0"/>
<MyChip label="Spring Boot REST"/>
<MyChip label="Spring Boot CLOUD"/>
<MyChip label="JWT authorization"/>
<MyChip label="Rest"/>
<MyChip label="Hibernate"/>
<MyChip label="Maven build tool"/>
</InfoPaper>

</InfoGrid>

<PanelGrid>
<Panel id="1" heading="What?" secondaryHeading="About the technologies I used" >

### The Stack:
- Java
- Spring Boot 2.0
- Hibernate
- H2 embedded database
- Hibernate Object-Relational mapping tool
- Actuator for monitoring and app metrics
- Maven as a build tool
</Panel>

<Panel id="2" heading="What for?" secondaryHeading="About the functionality" >  
  
### Main features
The REST server provides endpoints for authentication (signin & signup) with JWT tokens. It also provides a secure Rest API to authorised users, for two different types of resources. I am especially proud of using inheritance in order to provide abstract controller and persistence logic for both resources. The implementation happens on runtime depending on the endpoint.
</Panel>

<Panel id="3" heading="For Devs" secondaryHeading="How to deploy" >

### Custom deployment plan
Part of the exam project has been setting up a CI/CD pipeline. At the moment the project is not deployed and the repository is not being maintained. Below there's a short description of my original setup. The idea is to get Jenkins and TomCat running on an EC2 instance on the AWS cloud. 

### Setting up the EC2 
- Launch an EC2 instance in an aws VPC
- Configure security group with ports 22 (for ssh), 8088 (for Jenkins) and 8080(for tomcat) exposed to public access.
- SSH into your instance, and update packages
- Bring Jenkins repo and import a key file from Jenkins-CI to enable installation
- Install Jenkins and change ` /etc/sysconfig/jenkins` default port to 8088 and run Jenkins
- On your EC2's `http://<my-server-public-DNS>:8088` there's a Jenkins build server listening, you can see the GUI now.
- Login to Jenkins with the key you find at `/var/lib/jenkins/secrets/initialAdminPassword`
- From the GUI you can now download and install plugins related to the project like `Maven Intefration Plugin` and `Capitomcat Plugin`
- Install tomcat packages through SSH: `tomcat8-webapps`, `tomcat8-docs-webapp` and `tomcat8-admin-webapps`
- Add Jenkins as a user to tomcat: edit `/usr/share/tomcat8/conf/tomcat-users.xml` and add users `<user username="tomcat" password="tomcat" roles="manager-gui"/>` and `<user username="jenkins" password="jenkins" roles="manager-script, manager-gui, admin, admin-gui, admin-script, manager" />`
- There has been a change of the defalt settings in tomcat8, so you need to change `/var/lib/tomcat8/webapps/manager/META-INF/context.xml` and UNCOMMENT the vavle
- Now you can also access `http://<my-server-public-DNS>:8080/manager/html` and configure tomcat through the GUI
- Then you can follow the tutorial [here](https://www.tutorialspoint.com/jenkins/index.htm) in order to setup your first CI/CD job

My approach has been to setup a new job on Jenkins that would be triggered every time there's a new push to my github repository.

</Panel>

</PanelGrid>


</MainGrid>
