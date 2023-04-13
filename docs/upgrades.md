- [ ] Upgrades
    
    - [ ] Move everything to react

    - [ ] Global
        - [ ] topbar

    - [ ] Scenes

        - [ ] Index
            - Charts (Top of Page)
                - [ ] Metric for unresolved incidents/resolved incidents (can also be graph)
                - [ ] Metric for Connected EDRs
                - [ ] Graph for hosts enumd split into categories of connected to edr and disconnected

            - [ ] Table with host info  
                - [ ] hostname
                - [ ] ip
                - [ ] OS
                - [ ] num_incidents
                - [ ] is_connected
        
        - [ ] Reports
            - [ ] Table with options for which type of report to generate
                - [ ] General
                - [ ] Users
                - [ ] Services 
                - [ ] Network
                - [ ] Open Ports

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

        - [ ] Incidents

        - [ ] key management

        - [ ] login 
            - [ ] default user (can change password on first logon and create and delete user accounts)

        - [ ] Scripting Hub
            - [ ] Sidebar Links
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
        

