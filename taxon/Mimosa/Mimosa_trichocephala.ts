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


// Description of Mimosa trichocephala
const Mimosa_trichocephala = new Mimosa()
Mimosa_trichocephala.specificEpithet = 'trichocephala'

Mimosa_trichocephala.stems = new Stems()

Mimosa_trichocephala.stipule = new Stipule()
Mimosa_trichocephala.stipule.margin = new MarginStipule()
Mimosa_trichocephala.stipule.adaxial = new AdaxialStipule()
Mimosa_trichocephala.stipule.abaxial = new AbaxialStipule()

Mimosa_trichocephala.leaf = new Leaf()
Mimosa_trichocephala.leaf.petiole = new Petiole()
Mimosa_trichocephala.leaf.bipinnate = new Bipinnate()
Mimosa_trichocephala.leaf.bipinnate.rachis = new Rachis()
Mimosa_trichocephala.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_trichocephala.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_trichocephala.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_trichocephala.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_trichocephala.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_trichocephala.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_trichocephala.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_trichocephala.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_trichocephala.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_trichocephala.inflorescence = new Inflorescence()
Mimosa_trichocephala.inflorescence.peduncle = new Peduncle()
Mimosa_trichocephala.inflorescence.capitate = new CapitateInflorescence()

Mimosa_trichocephala.flower = new Flower()
Mimosa_trichocephala.flower.bracteole = new Bracteole()
Mimosa_trichocephala.flower.merism = '4-merous'
Mimosa_trichocephala.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_trichocephala.flower.calyx = new Calyx()
Mimosa_trichocephala.flower.corolla = new Corolla()
Mimosa_trichocephala.flower.corolla.shape = 'turbinate'

Mimosa_trichocephala.androecium = new Androecium()
Mimosa_trichocephala.androecium.filaments = new Filaments()
Mimosa_trichocephala.androecium.filaments.colour = 'pinkish'

Mimosa_trichocephala.ginoecium = new Ginoecium()
Mimosa_trichocephala.ginoecium.ovary = new Ovary()

Mimosa_trichocephala.fruit = new Fruit()
Mimosa_trichocephala.fruit.stipe = new Stipe()
Mimosa_trichocephala.fruit.replum = new Replum()
Mimosa_trichocephala.fruit.epicarp = new Epicarp()

Mimosa_trichocephala.seed = new Seed()


// Description authorship
Mimosa_trichocephala.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_trichocephala.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa trichocephala
export { Mimosa_trichocephala }