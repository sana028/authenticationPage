<?php

namespace backend\api;

use Exception;
use RapidWeb\GoogleOAuth2Handler\GoogleOAuth2Handler;

class GooglePeople{

    private $googleOAuth2Handler;

    public function __construct(GoogleOAuth2Handler $googleOAuth2Handler)
    {
        $this->googleOAuth2Handler = $googleOAuth2Handler;
    }
    
    public function get($resourceName)
    {
        $url = self::PEOPLE_BASE_URL.$resourceName.'?personFields='.implode(',', self::PERSON_FIELDS);

        $response = $this->googleOAuth2Handler->performRequest('GET', $url);
        $body = (string) $response->getBody();

        if ($response->getStatusCode()!=200) {
            throw new Exception($body);
        }

        $contact = json_decode($body);

        return $this->convertResponseConnectionToContact($contact);
    }
}