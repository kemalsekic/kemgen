let toggleBetweenFeeds = {
   overviewTest with
       name = "Overview - Toggle between feeds"
       envRestriction = Some [| AWSQA; Local |]
       testRailId = Some 11183
       testFunc = fun _ ->
           Nav.Overview.Click()
}