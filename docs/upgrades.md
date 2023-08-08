- [ ] Upgrades
    
    - [ ] Move everything to react

    - [ ] Global
        - [ ] topbar 
        - [ ] Sidebar (Will change per page by passing an object to it which will be placed below default elements)

    - [ ] Scenes

        - [ ] Index
            - [ ] Sidebar
                - [ ] Graphs            
            
            - [ ] Subscenes
                - General

                    - Charts (Top of Page)
                        - [ ] Num Unresolved Incidents
                        - [ ] Num Monitored Objects
                        - [ ] Metric for unresolved incidents/resolved incidents (can also be graph)
                            - [ ] *** Make creation dynamic in Piechart.jsx, add stock market like sliding ***
                        - [ ] Graph for hosts enumd split into categories of connected to edr and disconnected

                    - [ ] Table with host info  
                        - [ ] hostname
                        - [ ] ip
                        - [ ] OS
                        - [ ] num_incidents
                        - [ ] is_connected

                - [ ] Analytics

                    - [ ] Heat map for num incidents across network
                    - [ ] DNS Map
                    - [ ] Metric for unresolved incidents/resolved incidents (can also be graph)
                    - [ ] Graph for hosts enumd split into categories of connected to edr and disconnected

                

        - [ ] Reports
            - [ ] Table with options for which type of report to generate
                - [ ] General
                - [ ] Users
                - [ ] Services 
                - [ ] Network
                - [ ] Open Ports
                - [ ] Network Topology
            - [ ] Dyanmic Report Maker

        - [ ] Logs
            - [ ] Serial Logs (Various internal server functions get logged)
                - [ ] User-logon
                - [ ] interactions with remote hosts
                - [ ] user add/delete
                - [ ] error handling
            
            - [ ] Remote Host Logs
                - [ ] Aggregate logs from hosts into one location
                    - [ ] fields 
                        - [ ] service origin
                        - [ ] hostname
                        - [ ] ip
                        - [ ] timestamp
                        - [ ] severity
                        - [ ] content/message

        - [ ] Manage
            - [ ] Global Elements
                - [ ] Hostname 
                - [ ] IP Address
                - [ ] Graph/Metric for Incidents
                - [ ] EDR Connection Status

            - [ ] Side Bar 
                - [ ] Quick Stats
                - [ ] Users
                - [ ] Ports (Linux)
                - [ ] Network Windows
                - [ ] Services
                - [ ] Firewall
                - [ ] Monitor (Create Monitors)
                - [ ] Remediation
                - [ ] Host Logs
                - [ ] Backup

            - [ ] Subscenes

                - [ ] Quick Stats
                    - [ ] OS Version
                    - [ ]

        - [ ] Incidents

        - [ ] key management

        - [ ] login 
            - [ ] default user (can change password on first logon and create and delete user accounts)

        - [ ] Scripting Hub
            - [ ] Sidebar Links
                - [ ] add transition that makes it look like it swipes to either side to show the next panes depending on what is clicked
                - [ ] Windows
                - [ ] Linux

            - [ ] Content
                - [ ] Welcome to the Scripting Hub Select Windows or Linux
                - [ ] Windows / Linux represented as icons/buttons with text as well

                    - [ ] Windows
                        - [ ] Sidebar
                            - [ ] Windows Scripts 
                            - [ ] Windows Hosts 

                        - [ ] Windows Scripts pane
                            - [ ] windows scripts
                        - [ ] Windows Hosts pane
                            - [ ] windows hosts

                    - [ ] Linux
                        - [ ] Sidebar
                            - [ ] Linux Scripts 
                            - [ ] Linux Hosts  

                        - [ ] Linux Scripts pane
                            - [ ] linux scripts
                        - [ ] Linux Hosts pane
                            - [ ] linux hosts

        - [ ] Visualize Network

        - [ ] Network Topology

        - [ ] TCP Dump for Scored Services

        - [ ] Backups
            - [ ] Store hash of original backup and compare hash before distributing it to ensure changes have not been madeS
        
        - [ ] (Optional) Vsphere
                        


    - [ ] Backend
        - [ ] Razdavat
        - [ ] Searching
        - [ ] Serial Logs Filtering
        - [ ] Serial Logs generation

    - [ ] Database
        - [ ] Decide on which database is most compatible and efficient

    - [ ] Rest API

    - [ ] Features
        - [ ] User Action Logging (when user interacts with remote machine log action and store in db for reference)
        - [ ] Flash Messages
            - [ ] Incident Alert 
                - [ ] Link to hosts' manage page - remediation pane

    - [ ] Playbook
        - [ ] Lockdown machine playbook

        

