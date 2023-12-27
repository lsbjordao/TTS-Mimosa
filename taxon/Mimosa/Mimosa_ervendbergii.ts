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


// Description of Mimosa ervendbergii
const Mimosa_ervendbergii = new Mimosa()
Mimosa_ervendbergii.specificEpithet = 'ervendbergii'

Mimosa_ervendbergii.stems = new Stems()

Mimosa_ervendbergii.stipule = new Stipule()
Mimosa_ervendbergii.stipule.margin = new MarginStipule()
Mimosa_ervendbergii.stipule.adaxial = new AdaxialStipule()
Mimosa_ervendbergii.stipule.abaxial = new AbaxialStipule()

Mimosa_ervendbergii.leaf = new Leaf()
Mimosa_ervendbergii.leaf.petiole = new Petiole()
Mimosa_ervendbergii.leaf.bipinnate = new Bipinnate()
Mimosa_ervendbergii.leaf.bipinnate.rachis = new Rachis()
Mimosa_ervendbergii.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_ervendbergii.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_ervendbergii.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_ervendbergii.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_ervendbergii.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_ervendbergii.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_ervendbergii.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_ervendbergii.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_ervendbergii.inflorescence = new Inflorescence()
Mimosa_ervendbergii.inflorescence.peduncle = new Peduncle()
Mimosa_ervendbergii.inflorescence.capitate = new CapitateInflorescence()

Mimosa_ervendbergii.flower = new Flower()
Mimosa_ervendbergii.flower.bracteole = new Bracteole()
Mimosa_ervendbergii.flower.merism = ['4-merous', '5-merous']
Mimosa_ervendbergii.flower.calyx = new Calyx()
Mimosa_ervendbergii.flower.calyx.shape = 'campanulate'
Mimosa_ervendbergii.flower.corolla = new Corolla()

Mimosa_ervendbergii.androecium = new Androecium()
Mimosa_ervendbergii.androecium.filaments = new Filaments()

Mimosa_ervendbergii.ginoecium = new Ginoecium()
Mimosa_ervendbergii.ginoecium.ovary = new Ovary()

Mimosa_ervendbergii.fruit = new Fruit()
Mimosa_ervendbergii.fruit.stipe = new Stipe()
Mimosa_ervendbergii.fruit.replum = new Replum()
Mimosa_ervendbergii.fruit.epicarp = new Epicarp()

Mimosa_ervendbergii.seed = new Seed()


// Description authorship
Mimosa_ervendbergii.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_ervendbergii.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa ervendbergii
export { Mimosa_ervendbergii }