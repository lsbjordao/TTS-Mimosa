// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { 
    Stems, 
    Trichomes,
    Prickles,
    Stipule, 
    Leaf, 
    Inflorescence, 
    Flower,
    Androecium,
    Ginoecium,
    Fruit
} from '../../characters/v1'
import { Bipinnate, Petiole } from '../../characters/v1/Leaf'
import { Rachis, Pinnae } from '../../characters/v1/Leaf/Bipinnate'
import { Spicule } from '../../characters/v1/Leaf/Bipinnate/Rachis/Spicule'
import { Rachilla, Leaflet, Paraphillidia } from '../../characters/v1/Leaf/Bipinnate/Pinnae'
import {
    AdaxialLeaflet, 
    AbaxialLeaflet, 
    MarginLeaflet
} from '../../characters/v1/Leaf/Bipinnate/Pinnae/Leaflet'
import { AdaxialStipule, AbaxialStipule, MarginStipule } from '../../characters/v1/Stipule'
import { Peduncle, CapitateInflorescence } from '../../characters/v1/Inflorescence'
import { Calyx, Corolla, Bracteole } from '../../characters/v1/Flower'
import { Stipe, Epicarp, Replum } from '../../characters/v1/Fruit'
import { Filaments } from '../../characters/v1/Androecium'
import { Ovary } from '../../characters/v1/Ginoecium'
import { Seed } from '../../characters/v1/Seed'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'


// Description of Mimosa affinis
const Mimosa_affinis = new Mimosa()
Mimosa_affinis.specificEpithet = 'affinis'

Mimosa_affinis.stems = new Stems()

Mimosa_affinis.stipule = new Stipule()
Mimosa_affinis.stipule.margin = new MarginStipule()
Mimosa_affinis.stipule.adaxial = new AdaxialStipule()
Mimosa_affinis.stipule.abaxial = new AbaxialStipule()

Mimosa_affinis.leaf = new Leaf()
Mimosa_affinis.leaf.petiole = new Petiole()
Mimosa_affinis.leaf.bipinnate = new Bipinnate()
Mimosa_affinis.leaf.bipinnate.rachis = new Rachis()
Mimosa_affinis.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_affinis.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_affinis.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_affinis.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_affinis.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_affinis.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_affinis.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_affinis.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_affinis.inflorescence = new Inflorescence()
Mimosa_affinis.inflorescence.peduncle = new Peduncle()
Mimosa_affinis.inflorescence.capitate = new CapitateInflorescence()

Mimosa_affinis.flower = new Flower()
Mimosa_affinis.flower.bracteole = new Bracteole()
Mimosa_affinis.flower.calyx = new Calyx()
Mimosa_affinis.flower.corolla = new Corolla()

Mimosa_affinis.androecium = new Androecium()
Mimosa_affinis.androecium.filaments = new Filaments()

Mimosa_affinis.ginoecium = new Ginoecium()
Mimosa_affinis.ginoecium.ovary = new Ovary()

Mimosa_affinis.fruit = new Fruit()
Mimosa_affinis.fruit.stipe = new Stipe()
Mimosa_affinis.fruit.replum = new Replum()
Mimosa_affinis.fruit.epicarp = new Epicarp()

Mimosa_affinis.seed = new Seed()


// Description authorship
Mimosa_affinis.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_affinis.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709349 
})


// Sources


// Export Mimosa affinis
export { Mimosa_affinis }