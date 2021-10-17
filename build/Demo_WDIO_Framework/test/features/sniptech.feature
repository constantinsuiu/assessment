@test
Feature: Click around SnipTech website

  Scenario: As a visitor I can click around the Join Us and Contact pages

    Given I navigate to SnipTech
    When I navigate to Join Us
    Then I see available jobs
    When I navigate to Contact
    Then I validate company address